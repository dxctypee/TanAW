import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AccessibilityProfile_Key {
  id: UUIDString;
  __typename?: 'AccessibilityProfile_Key';
}

export interface DeleteAccessibilityData {
  accessibilityProfile_delete?: AccessibilityProfile_Key | null;
}

export interface DeleteAccessibilityVariables {
  id: UUIDString;
}

export interface DeleteLocationData {
  location_delete?: Location_Key | null;
}

export interface DeleteLocationVariables {
  id: UUIDString;
}

export interface DeleteMediaData {
  mediaAsset_delete?: MediaAsset_Key | null;
}

export interface DeleteMediaVariables {
  id: UUIDString;
}

export interface DeleteReportData {
  report_delete?: Report_Key | null;
}

export interface DeleteReportVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface GetAccessibilityData {
  accessibilityProfile?: {
    overallRating: number;
    isVerified: boolean;
  };
}

export interface GetAccessibilityVariables {
  id: UUIDString;
}

export interface GetLocationData {
  location?: {
    name: string;
    address: string;
  };
}

export interface GetLocationVariables {
  id: UUIDString;
}

export interface GetMediaData {
  mediaAsset?: {
    url: string;
    analysisStatus: string;
  };
}

export interface GetMediaVariables {
  id: UUIDString;
}

export interface GetMyUserData {
  user?: {
    username: string;
    pointsScore: number;
  };
}

export interface GetReportData {
  report?: {
    reportType: string;
    comments?: string | null;
  };
}

export interface GetReportVariables {
  id: UUIDString;
}

export interface InsertAccessibilityData {
  accessibilityProfile_insert: AccessibilityProfile_Key;
}

export interface InsertAccessibilityVariables {
  locId: UUIDString;
  rating: number;
}

export interface InsertLocationData {
  location_insert: Location_Key;
}

export interface InsertLocationVariables {
  name: string;
  lat: number;
  lon: number;
  addr: string;
}

export interface InsertMediaData {
  mediaAsset_insert: MediaAsset_Key;
}

export interface InsertMediaVariables {
  locId: UUIDString;
  url: string;
}

export interface InsertReportData {
  report_insert: Report_Key;
}

export interface InsertReportVariables {
  locId: UUIDString;
  type: string;
  ts: TimestampString;
}

export interface InsertUserData {
  user_insert: User_Key;
}

export interface ListAccessibilityProfilesData {
  accessibilityProfiles: ({
    overallRating: number;
    hasRamp?: boolean | null;
  })[];
}

export interface ListLocationsData {
  locations: ({
    name: string;
    latitude: number;
    longitude: number;
  })[];
}

export interface ListMediaData {
  mediaAssets: ({
    url: string;
    analysisStatus: string;
  })[];
}

export interface ListReportsData {
  reports: ({
    reportType: string;
    timestamp: TimestampString;
  })[];
}

export interface ListUsersData {
  users: ({
    username: string;
  })[];
}

export interface Location_Key {
  id: UUIDString;
  __typename?: 'Location_Key';
}

export interface MediaAsset_Key {
  id: UUIDString;
  __typename?: 'MediaAsset_Key';
}

export interface Report_Key {
  id: UUIDString;
  __typename?: 'Report_Key';
}

export interface UpdateAccessibilityData {
  accessibilityProfile_update?: AccessibilityProfile_Key | null;
}

export interface UpdateAccessibilityVariables {
  id: UUIDString;
  hasRamp: boolean;
}

export interface UpdateLocationData {
  location_update?: Location_Key | null;
}

export interface UpdateLocationVariables {
  id: UUIDString;
  website: string;
}

export interface UpdateMediaData {
  mediaAsset_update?: MediaAsset_Key | null;
}

export interface UpdateMediaVariables {
  id: UUIDString;
  status: string;
}

export interface UpdateReportData {
  report_update?: Report_Key | null;
}

export interface UpdateReportVariables {
  id: UUIDString;
  comments: string;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  username: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface InsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertUserData, undefined>;
  operationName: string;
}
export const insertUserRef: InsertUserRef;

export function insertUser(): MutationPromise<InsertUserData, undefined>;
export function insertUser(dc: DataConnect): MutationPromise<InsertUserData, undefined>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetMyUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyUserData, undefined>;
  operationName: string;
}
export const getMyUserRef: GetMyUserRef;

export function getMyUser(options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;
export function getMyUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface InsertLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertLocationVariables): MutationRef<InsertLocationData, InsertLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: InsertLocationVariables): MutationRef<InsertLocationData, InsertLocationVariables>;
  operationName: string;
}
export const insertLocationRef: InsertLocationRef;

export function insertLocation(vars: InsertLocationVariables): MutationPromise<InsertLocationData, InsertLocationVariables>;
export function insertLocation(dc: DataConnect, vars: InsertLocationVariables): MutationPromise<InsertLocationData, InsertLocationVariables>;

interface UpdateLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLocationVariables): MutationRef<UpdateLocationData, UpdateLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateLocationVariables): MutationRef<UpdateLocationData, UpdateLocationVariables>;
  operationName: string;
}
export const updateLocationRef: UpdateLocationRef;

export function updateLocation(vars: UpdateLocationVariables): MutationPromise<UpdateLocationData, UpdateLocationVariables>;
export function updateLocation(dc: DataConnect, vars: UpdateLocationVariables): MutationPromise<UpdateLocationData, UpdateLocationVariables>;

interface DeleteLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLocationVariables): MutationRef<DeleteLocationData, DeleteLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteLocationVariables): MutationRef<DeleteLocationData, DeleteLocationVariables>;
  operationName: string;
}
export const deleteLocationRef: DeleteLocationRef;

export function deleteLocation(vars: DeleteLocationVariables): MutationPromise<DeleteLocationData, DeleteLocationVariables>;
export function deleteLocation(dc: DataConnect, vars: DeleteLocationVariables): MutationPromise<DeleteLocationData, DeleteLocationVariables>;

interface GetLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLocationVariables): QueryRef<GetLocationData, GetLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetLocationVariables): QueryRef<GetLocationData, GetLocationVariables>;
  operationName: string;
}
export const getLocationRef: GetLocationRef;

export function getLocation(vars: GetLocationVariables, options?: ExecuteQueryOptions): QueryPromise<GetLocationData, GetLocationVariables>;
export function getLocation(dc: DataConnect, vars: GetLocationVariables, options?: ExecuteQueryOptions): QueryPromise<GetLocationData, GetLocationVariables>;

interface ListLocationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListLocationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListLocationsData, undefined>;
  operationName: string;
}
export const listLocationsRef: ListLocationsRef;

export function listLocations(options?: ExecuteQueryOptions): QueryPromise<ListLocationsData, undefined>;
export function listLocations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListLocationsData, undefined>;

interface InsertAccessibilityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertAccessibilityVariables): MutationRef<InsertAccessibilityData, InsertAccessibilityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: InsertAccessibilityVariables): MutationRef<InsertAccessibilityData, InsertAccessibilityVariables>;
  operationName: string;
}
export const insertAccessibilityRef: InsertAccessibilityRef;

export function insertAccessibility(vars: InsertAccessibilityVariables): MutationPromise<InsertAccessibilityData, InsertAccessibilityVariables>;
export function insertAccessibility(dc: DataConnect, vars: InsertAccessibilityVariables): MutationPromise<InsertAccessibilityData, InsertAccessibilityVariables>;

interface UpdateAccessibilityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAccessibilityVariables): MutationRef<UpdateAccessibilityData, UpdateAccessibilityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateAccessibilityVariables): MutationRef<UpdateAccessibilityData, UpdateAccessibilityVariables>;
  operationName: string;
}
export const updateAccessibilityRef: UpdateAccessibilityRef;

export function updateAccessibility(vars: UpdateAccessibilityVariables): MutationPromise<UpdateAccessibilityData, UpdateAccessibilityVariables>;
export function updateAccessibility(dc: DataConnect, vars: UpdateAccessibilityVariables): MutationPromise<UpdateAccessibilityData, UpdateAccessibilityVariables>;

interface DeleteAccessibilityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAccessibilityVariables): MutationRef<DeleteAccessibilityData, DeleteAccessibilityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteAccessibilityVariables): MutationRef<DeleteAccessibilityData, DeleteAccessibilityVariables>;
  operationName: string;
}
export const deleteAccessibilityRef: DeleteAccessibilityRef;

export function deleteAccessibility(vars: DeleteAccessibilityVariables): MutationPromise<DeleteAccessibilityData, DeleteAccessibilityVariables>;
export function deleteAccessibility(dc: DataConnect, vars: DeleteAccessibilityVariables): MutationPromise<DeleteAccessibilityData, DeleteAccessibilityVariables>;

interface GetAccessibilityRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAccessibilityVariables): QueryRef<GetAccessibilityData, GetAccessibilityVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAccessibilityVariables): QueryRef<GetAccessibilityData, GetAccessibilityVariables>;
  operationName: string;
}
export const getAccessibilityRef: GetAccessibilityRef;

export function getAccessibility(vars: GetAccessibilityVariables, options?: ExecuteQueryOptions): QueryPromise<GetAccessibilityData, GetAccessibilityVariables>;
export function getAccessibility(dc: DataConnect, vars: GetAccessibilityVariables, options?: ExecuteQueryOptions): QueryPromise<GetAccessibilityData, GetAccessibilityVariables>;

interface ListAccessibilityProfilesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAccessibilityProfilesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAccessibilityProfilesData, undefined>;
  operationName: string;
}
export const listAccessibilityProfilesRef: ListAccessibilityProfilesRef;

export function listAccessibilityProfiles(options?: ExecuteQueryOptions): QueryPromise<ListAccessibilityProfilesData, undefined>;
export function listAccessibilityProfiles(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAccessibilityProfilesData, undefined>;

interface InsertMediaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertMediaVariables): MutationRef<InsertMediaData, InsertMediaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: InsertMediaVariables): MutationRef<InsertMediaData, InsertMediaVariables>;
  operationName: string;
}
export const insertMediaRef: InsertMediaRef;

export function insertMedia(vars: InsertMediaVariables): MutationPromise<InsertMediaData, InsertMediaVariables>;
export function insertMedia(dc: DataConnect, vars: InsertMediaVariables): MutationPromise<InsertMediaData, InsertMediaVariables>;

interface UpdateMediaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMediaVariables): MutationRef<UpdateMediaData, UpdateMediaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateMediaVariables): MutationRef<UpdateMediaData, UpdateMediaVariables>;
  operationName: string;
}
export const updateMediaRef: UpdateMediaRef;

export function updateMedia(vars: UpdateMediaVariables): MutationPromise<UpdateMediaData, UpdateMediaVariables>;
export function updateMedia(dc: DataConnect, vars: UpdateMediaVariables): MutationPromise<UpdateMediaData, UpdateMediaVariables>;

interface DeleteMediaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteMediaVariables): MutationRef<DeleteMediaData, DeleteMediaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteMediaVariables): MutationRef<DeleteMediaData, DeleteMediaVariables>;
  operationName: string;
}
export const deleteMediaRef: DeleteMediaRef;

export function deleteMedia(vars: DeleteMediaVariables): MutationPromise<DeleteMediaData, DeleteMediaVariables>;
export function deleteMedia(dc: DataConnect, vars: DeleteMediaVariables): MutationPromise<DeleteMediaData, DeleteMediaVariables>;

interface GetMediaRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMediaVariables): QueryRef<GetMediaData, GetMediaVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMediaVariables): QueryRef<GetMediaData, GetMediaVariables>;
  operationName: string;
}
export const getMediaRef: GetMediaRef;

export function getMedia(vars: GetMediaVariables, options?: ExecuteQueryOptions): QueryPromise<GetMediaData, GetMediaVariables>;
export function getMedia(dc: DataConnect, vars: GetMediaVariables, options?: ExecuteQueryOptions): QueryPromise<GetMediaData, GetMediaVariables>;

interface ListMediaRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMediaData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMediaData, undefined>;
  operationName: string;
}
export const listMediaRef: ListMediaRef;

export function listMedia(options?: ExecuteQueryOptions): QueryPromise<ListMediaData, undefined>;
export function listMedia(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMediaData, undefined>;

interface InsertReportRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertReportVariables): MutationRef<InsertReportData, InsertReportVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: InsertReportVariables): MutationRef<InsertReportData, InsertReportVariables>;
  operationName: string;
}
export const insertReportRef: InsertReportRef;

export function insertReport(vars: InsertReportVariables): MutationPromise<InsertReportData, InsertReportVariables>;
export function insertReport(dc: DataConnect, vars: InsertReportVariables): MutationPromise<InsertReportData, InsertReportVariables>;

interface UpdateReportRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReportVariables): MutationRef<UpdateReportData, UpdateReportVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateReportVariables): MutationRef<UpdateReportData, UpdateReportVariables>;
  operationName: string;
}
export const updateReportRef: UpdateReportRef;

export function updateReport(vars: UpdateReportVariables): MutationPromise<UpdateReportData, UpdateReportVariables>;
export function updateReport(dc: DataConnect, vars: UpdateReportVariables): MutationPromise<UpdateReportData, UpdateReportVariables>;

interface DeleteReportRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReportVariables): MutationRef<DeleteReportData, DeleteReportVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteReportVariables): MutationRef<DeleteReportData, DeleteReportVariables>;
  operationName: string;
}
export const deleteReportRef: DeleteReportRef;

export function deleteReport(vars: DeleteReportVariables): MutationPromise<DeleteReportData, DeleteReportVariables>;
export function deleteReport(dc: DataConnect, vars: DeleteReportVariables): MutationPromise<DeleteReportData, DeleteReportVariables>;

interface GetReportRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetReportVariables): QueryRef<GetReportData, GetReportVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetReportVariables): QueryRef<GetReportData, GetReportVariables>;
  operationName: string;
}
export const getReportRef: GetReportRef;

export function getReport(vars: GetReportVariables, options?: ExecuteQueryOptions): QueryPromise<GetReportData, GetReportVariables>;
export function getReport(dc: DataConnect, vars: GetReportVariables, options?: ExecuteQueryOptions): QueryPromise<GetReportData, GetReportVariables>;

interface ListReportsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReportsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListReportsData, undefined>;
  operationName: string;
}
export const listReportsRef: ListReportsRef;

export function listReports(options?: ExecuteQueryOptions): QueryPromise<ListReportsData, undefined>;
export function listReports(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReportsData, undefined>;

