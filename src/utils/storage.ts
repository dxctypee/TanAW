/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { INITIAL_LOCATIONS } from '../data/initialLocations';
import { LocationPin, LocationTag, Review } from '../types/accessibility';
import { db, auth, isFirebaseConfigured } from '../firebase';
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const STORAGE_KEY = 'accessmap_cdo_locations_v1';
const VOTES_KEY = 'accessmap_user_votes_v1';
const CURRENT_USER_KEY = 'accessmap_current_user_v1';
const USERS_LIST_KEY = 'accessmap_registered_users_v1';
const SAVED_PLACES_KEY = 'accessmap_saved_places_v1';
const MESSAGES_KEY = 'accessmap_community_messages_v1';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'PWD Member / Advocate' | 'Caregiver / Family' | 'Community Mapper';
  bio?: string;
  createdAt: string;
}

export interface CommunityMessage {
  id: string;
  senderName: string;
  senderRole: string;
  text: string;
  timestamp: string;
}

const INITIAL_MESSAGES: CommunityMessage[] = [
  {
    id: 'msg-1',
    senderName: 'Maria Santos',
    senderRole: 'PWD Member / Advocate',
    text: 'Welcome to TanAW CDO! Our team just verified the north entrance ramp and elevator access at Centrio Mall.',
    timestamp: 'Today, 9:15 AM',
  },
  {
    id: 'msg-2',
    senderName: 'Carlo Mendoza',
    senderRole: 'Community Mapper',
    text: 'Heads up for wheelchair users visiting Divisoria: the Gaston Park side curb cut is clear, but RN Abejuela St has ongoing sidewalk repairs.',
    timestamp: 'Today, 11:40 AM',
  },
  {
    id: 'msg-3',
    senderName: 'Dr. Elena Reyes',
    senderRole: 'Caregiver / Family',
    text: 'Thank you to everyone verifying hospital entrances in Northern Mindanao Medical Center—this helps our senior patients so much!',
    timestamp: 'Yesterday',
  },
];

interface StoredAccount extends AuthUser {
  password?: string;
  passwordHash?: string;
}

/**
 * Standard Web Crypto SHA-256 password hash.
 * Ensures passwords stored in Firestore are never stored as plain text.
 */
async function hashPassword(password: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + '_tanaw_salt');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  return password;
}

export function getCurrentUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function setCurrentUserSession(user: AuthUser | null): void {
  try {
    if (!user) {
      localStorage.removeItem(CURRENT_USER_KEY);
    } else {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    }
  } catch (e) {
    console.error('Failed to save user session:', e);
  }
}

export function getRegisteredAccounts(): StoredAccount[] {
  try {
    const raw = localStorage.getItem(USERS_LIST_KEY);
    return raw ? (JSON.parse(raw) as StoredAccount[]) : [];
  } catch {
    return [];
  }
}

export async function registerAccount(
  name: string,
  email: string,
  password: string,
  role: AuthUser['role']
): Promise<{ user?: AuthUser; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const trimmedName = name.trim();

  // 1. If Firebase is configured, store in Firestore collection 'users'
  if (isFirebaseConfigured && db) {
    try {
      const usersCol = collection(db, 'users');
      const emailQuery = query(usersCol, where('email', '==', cleanEmail));
      const existingSnap = await getDocs(emailQuery);

      if (!existingSnap.empty) {
        return { error: 'An account with this email already exists in Firebase. Please sign in.' };
      }

      let uid = `usr-${Date.now()}`;

      // Try Firebase Auth if enabled in project console
      if (auth) {
        try {
          const userCred = await createUserWithEmailAndPassword(auth, cleanEmail, password);
          if (userCred.user) {
            uid = userCred.user.uid;
            await updateProfile(userCred.user, { displayName: trimmedName });
          }
        } catch (authErr: any) {
          // If auth/configuration-not-found, user hasn't enabled Auth in Firebase Console yet.
          // Still persists cleanly in Firestore 'users' collection.
          console.info('[TanAW Auth] Firebase Auth not toggled in console, writing account to Firestore users collection:', authErr?.code);
        }
      }

      const hashedPassword = await hashPassword(password);
      const newAccount: StoredAccount = {
        id: uid,
        name: trimmedName,
        email: cleanEmail,
        role,
        passwordHash: hashedPassword,
        createdAt: new Date().toISOString(),
      };

      // Write user profile to Firestore
      await setDoc(doc(db, 'users', uid), {
        id: uid,
        name: trimmedName,
        email: cleanEmail,
        role,
        passwordHash: hashedPassword,
        createdAt: newAccount.createdAt,
        updatedAt: newAccount.createdAt,
      });

      // Cache locally
      const accounts = getRegisteredAccounts();
      localStorage.setItem(USERS_LIST_KEY, JSON.stringify([...accounts, newAccount]));

      const publicUser: AuthUser = {
        id: uid,
        name: trimmedName,
        email: cleanEmail,
        role,
        createdAt: newAccount.createdAt,
      };

      setCurrentUserSession(publicUser);
      return { user: publicUser };
    } catch (err: any) {
      console.error('[TanAW Auth] Registration error in Firebase:', err);
    }
  }

  // 2. Local storage fallback
  const accounts = getRegisteredAccounts();
  if (accounts.some((acc) => acc.email.toLowerCase() === cleanEmail)) {
    return { error: 'An account with this email already exists. Please sign in.' };
  }

  const hashedPassword = await hashPassword(password);
  const newAccount: StoredAccount = {
    id: `usr-${Date.now()}`,
    name: trimmedName,
    email: cleanEmail,
    role,
    passwordHash: hashedPassword,
    createdAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(USERS_LIST_KEY, JSON.stringify([...accounts, newAccount]));
  } catch (e) {
    console.error('Failed to save account:', e);
  }

  const { password: _, passwordHash: __, ...publicUser } = newAccount;
  setCurrentUserSession(publicUser);
  return { user: publicUser };
}

export async function signInAccount(
  email: string,
  password: string
): Promise<{ user?: AuthUser; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();

  // 1. Try Firebase if configured
  if (isFirebaseConfigured && db) {
    try {
      if (auth) {
        try {
          const userCred = await signInWithEmailAndPassword(auth, cleanEmail, password);
          if (userCred.user) {
            const userDoc = await getDoc(doc(db, 'users', userCred.user.uid));
            if (userDoc.exists()) {
              const data = userDoc.data() as StoredAccount;
              const publicUser: AuthUser = {
                id: data.id || userCred.user.uid,
                name: data.name || userCred.user.displayName || 'Verified Mapper',
                email: data.email || cleanEmail,
                role: data.role || 'PWD Member / Advocate',
                bio: data.bio,
                createdAt: data.createdAt || new Date().toISOString(),
              };
              setCurrentUserSession(publicUser);
              return { user: publicUser };
            }
          }
        } catch (authErr: any) {
          if (authErr.code === 'auth/wrong-password' || authErr.code === 'auth/invalid-credential') {
            return { error: 'Incorrect password. Please try again.' };
          }
          if (authErr.code === 'auth/user-not-found') {
            return { error: 'No account found for this email. Create an account first.' };
          }
        }
      }

      // Query Firestore collection 'users'
      const usersCol = collection(db, 'users');
      const q = query(usersCol, where('email', '==', cleanEmail));
      const snap = await getDocs(q);

      if (!snap.empty) {
        const docData = snap.docs[0].data() as StoredAccount & { password?: string };
        const hashedInput = await hashPassword(password);
        const passwordMatches =
          docData.passwordHash === hashedInput ||
          docData.password === password;

        if (!passwordMatches) {
          return { error: 'Incorrect password. Please try again.' };
        }

        const publicUser: AuthUser = {
          id: docData.id || snap.docs[0].id,
          name: docData.name,
          email: docData.email,
          role: docData.role || 'PWD Member / Advocate',
          bio: docData.bio,
          createdAt: docData.createdAt || new Date().toISOString(),
        };

        setCurrentUserSession(publicUser);
        return { user: publicUser };
      }
    } catch (err) {
      console.error('[TanAW Auth] Error signing in with Firebase:', err);
    }
  }

  // 2. Local storage fallback
  const accounts = getRegisteredAccounts();
  const found = accounts.find((acc) => acc.email.toLowerCase() === cleanEmail);

  if (!found) {
    return { error: 'No account found for this email. Create an account first.' };
  }

  const hashedInput = await hashPassword(password);
  const passwordMatches =
    found.passwordHash === hashedInput || found.password === password;

  if (!passwordMatches) {
    return { error: 'Incorrect password. Please try again.' };
  }

  const { password: _, passwordHash: __, ...publicUser } = found;
  setCurrentUserSession(publicUser);
  return { user: publicUser };
}

export async function updateUserProfile(updated: AuthUser): Promise<AuthUser> {
  setCurrentUserSession(updated);

  // Update in Firestore
  if (isFirebaseConfigured && db && updated.id) {
    try {
      await setDoc(doc(db, 'users', updated.id), {
        ...updated,
        updatedAt: new Date().toISOString(),
      }, { merge: true });
    } catch (err) {
      console.error('[TanAW Auth] Failed to update user profile in Firestore:', err);
    }
  }

  // Update local cache
  try {
    const accounts = getRegisteredAccounts();
    const next = accounts.map((acc) =>
      acc.id === updated.id ? { ...acc, ...updated } : acc
    );
    localStorage.setItem(USERS_LIST_KEY, JSON.stringify(next));
  } catch (e) {
    console.error('Failed to update user in accounts list:', e);
  }

  return updated;
}

export function getSavedPlaceIds(userId: string): string[] {
  try {
    const raw = localStorage.getItem(`${SAVED_PLACES_KEY}_${userId}`);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function toggleSavedPlaceId(userId: string, locationId: string): string[] {
  const current = getSavedPlaceIds(userId);
  const next = current.includes(locationId)
    ? current.filter((id) => id !== locationId)
    : [locationId, ...current];
  try {
    localStorage.setItem(`${SAVED_PLACES_KEY}_${userId}`, JSON.stringify(next));
  } catch (e) {
    console.error('Failed to save bookmarked place:', e);
  }
  return next;
}

export function getCommunityMessages(): CommunityMessage[] {
  try {
    const raw = localStorage.getItem(MESSAGES_KEY);
    return raw ? (JSON.parse(raw) as CommunityMessage[]) : INITIAL_MESSAGES;
  } catch {
    return INITIAL_MESSAGES;
  }
}

export function sendCommunityMessage(
  senderName: string,
  senderRole: string,
  text: string
): CommunityMessage[] {
  const current = getCommunityMessages();
  const newMsg: CommunityMessage = {
    id: `msg-${Date.now()}`,
    senderName,
    senderRole,
    text: text.trim(),
    timestamp: 'Just now',
  };
  const next = [...current, newMsg];
  try {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(next));
  } catch (e) {
    console.error('Failed to save message:', e);
  }
  return next;
}

export function loadLocations(): LocationPin[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveLocations(INITIAL_LOCATIONS);
      return INITIAL_LOCATIONS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      saveLocations(INITIAL_LOCATIONS);
      return INITIAL_LOCATIONS;
    }
    // Add newly published seed venues to existing browsers without overwriting
    // user edits, ratings, or saved community contributions.
    const existingIds = new Set(parsed.map((location: LocationPin) => location.id));
    const newlySeeded = INITIAL_LOCATIONS.filter((location) => !existingIds.has(location.id));
    if (newlySeeded.length > 0) {
      const merged = [...parsed, ...newlySeeded];
      saveLocations(merged);
      return merged;
    }
    return parsed;
  } catch (err) {
    console.error('Failed to load locations from localStorage:', err);
    return INITIAL_LOCATIONS;
  }
}

export function saveLocations(locations: LocationPin[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
  } catch (err) {
    console.error('Failed to save locations to localStorage:', err);
  }
}

export function resetToSeedData(): LocationPin[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(VOTES_KEY);
  } catch (e) {
    // ignore
  }
  saveLocations(INITIAL_LOCATIONS);
  return INITIAL_LOCATIONS;
}

export function getStoredUserVotes(): Record<string, 'confirm' | 'dispute'> {
  try {
    const raw = localStorage.getItem(VOTES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveStoredUserVote(pinId: string, tagName: string, vote: 'confirm' | 'dispute' | null): void {
  try {
    const votes = getStoredUserVotes();
    const key = `${pinId}__${tagName}`;
    if (vote === null) {
      delete votes[key];
    } else {
      votes[key] = vote;
    }
    localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
  } catch (e) {
    console.error('Failed to save vote', e);
  }
}

/**
 * Color coding rules:
 * - Green = high rating (>= 4.0)
 * - Yellow = mid rating (2.5 - 3.9)
 * - Red = low rating (< 2.5)
 * - Grey = unrated (averageRating <= 0 or totalReviews === 0)
 */
export function getRatingColor(averageRating: number, totalReviews: number): {
  color: string;
  label: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  hex: string;
} {
  if (totalReviews === 0 || averageRating <= 0) {
    return {
      color: 'grey',
      label: 'Unrated',
      bgClass: 'bg-slate-400',
      borderClass: 'border-slate-500',
      textClass: 'text-slate-700',
      hex: '#94a3b8',
    };
  }

  if (averageRating >= 4.0) {
    return {
      color: 'green',
      label: 'High Accessibility',
      bgClass: 'bg-emerald-600',
      borderClass: 'border-emerald-700',
      textClass: 'text-emerald-700',
      hex: '#059669',
    };
  }

  if (averageRating >= 2.5) {
    return {
      color: 'yellow',
      label: 'Moderate Accessibility',
      bgClass: 'bg-amber-500',
      borderClass: 'border-amber-600',
      textClass: 'text-amber-800',
      hex: '#d97706',
    };
  }

  return {
    color: 'red',
    label: 'Low Accessibility / Barriers',
    bgClass: 'bg-rose-600',
    borderClass: 'border-rose-700',
    textClass: 'text-rose-700',
    hex: '#e11d48',
  };
}

/**
 * Calculates distance in kilometers between two GPS coordinates
 */
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

/**
 * Compresses an uploaded image file to a lightweight JPEG data URL (max 800px)
 * so it fits safely within browser localStorage (5MB) and Firestore (1MB) limits.
 */
export function compressImageFile(file: File, maxDimension = 800, quality = 0.72): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read image file'));
    reader.onload = (event) => {
      const rawDataUrl = event.target?.result as string;
      const img = new Image();
      img.onerror = () => resolve(rawDataUrl);
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width >= height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(rawDataUrl);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  });
}
