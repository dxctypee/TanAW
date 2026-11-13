import { InsertUserData, UpdateUserData, UpdateUserVariables, DeleteUserData, GetMyUserData, ListUsersData, InsertLocationData, InsertLocationVariables, UpdateLocationData, UpdateLocationVariables, DeleteLocationData, DeleteLocationVariables, GetLocationData, GetLocationVariables, ListLocationsData, InsertAccessibilityData, InsertAccessibilityVariables, UpdateAccessibilityData, UpdateAccessibilityVariables, DeleteAccessibilityData, DeleteAccessibilityVariables, GetAccessibilityData, GetAccessibilityVariables, ListAccessibilityProfilesData, InsertMediaData, InsertMediaVariables, UpdateMediaData, UpdateMediaVariables, DeleteMediaData, DeleteMediaVariables, GetMediaData, GetMediaVariables, ListMediaData, InsertReportData, InsertReportVariables, UpdateReportData, UpdateReportVariables, DeleteReportData, DeleteReportVariables, GetReportData, GetReportVariables, ListReportsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useInsertUser(options?: useDataConnectMutationOptions<InsertUserData, FirebaseError, void>): UseDataConnectMutationResult<InsertUserData, undefined>;
export function useInsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<InsertUserData, FirebaseError, void>): UseDataConnectMutationResult<InsertUserData, undefined>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;

export function useGetMyUser(options?: useDataConnectQueryOptions<GetMyUserData>): UseDataConnectQueryResult<GetMyUserData, undefined>;
export function useGetMyUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyUserData>): UseDataConnectQueryResult<GetMyUserData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useInsertLocation(options?: useDataConnectMutationOptions<InsertLocationData, FirebaseError, InsertLocationVariables>): UseDataConnectMutationResult<InsertLocationData, InsertLocationVariables>;
export function useInsertLocation(dc: DataConnect, options?: useDataConnectMutationOptions<InsertLocationData, FirebaseError, InsertLocationVariables>): UseDataConnectMutationResult<InsertLocationData, InsertLocationVariables>;

export function useUpdateLocation(options?: useDataConnectMutationOptions<UpdateLocationData, FirebaseError, UpdateLocationVariables>): UseDataConnectMutationResult<UpdateLocationData, UpdateLocationVariables>;
export function useUpdateLocation(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateLocationData, FirebaseError, UpdateLocationVariables>): UseDataConnectMutationResult<UpdateLocationData, UpdateLocationVariables>;

export function useDeleteLocation(options?: useDataConnectMutationOptions<DeleteLocationData, FirebaseError, DeleteLocationVariables>): UseDataConnectMutationResult<DeleteLocationData, DeleteLocationVariables>;
export function useDeleteLocation(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteLocationData, FirebaseError, DeleteLocationVariables>): UseDataConnectMutationResult<DeleteLocationData, DeleteLocationVariables>;

export function useGetLocation(vars: GetLocationVariables, options?: useDataConnectQueryOptions<GetLocationData>): UseDataConnectQueryResult<GetLocationData, GetLocationVariables>;
export function useGetLocation(dc: DataConnect, vars: GetLocationVariables, options?: useDataConnectQueryOptions<GetLocationData>): UseDataConnectQueryResult<GetLocationData, GetLocationVariables>;

export function useListLocations(options?: useDataConnectQueryOptions<ListLocationsData>): UseDataConnectQueryResult<ListLocationsData, undefined>;
export function useListLocations(dc: DataConnect, options?: useDataConnectQueryOptions<ListLocationsData>): UseDataConnectQueryResult<ListLocationsData, undefined>;

export function useInsertAccessibility(options?: useDataConnectMutationOptions<InsertAccessibilityData, FirebaseError, InsertAccessibilityVariables>): UseDataConnectMutationResult<InsertAccessibilityData, InsertAccessibilityVariables>;
export function useInsertAccessibility(dc: DataConnect, options?: useDataConnectMutationOptions<InsertAccessibilityData, FirebaseError, InsertAccessibilityVariables>): UseDataConnectMutationResult<InsertAccessibilityData, InsertAccessibilityVariables>;

export function useUpdateAccessibility(options?: useDataConnectMutationOptions<UpdateAccessibilityData, FirebaseError, UpdateAccessibilityVariables>): UseDataConnectMutationResult<UpdateAccessibilityData, UpdateAccessibilityVariables>;
export function useUpdateAccessibility(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateAccessibilityData, FirebaseError, UpdateAccessibilityVariables>): UseDataConnectMutationResult<UpdateAccessibilityData, UpdateAccessibilityVariables>;

export function useDeleteAccessibility(options?: useDataConnectMutationOptions<DeleteAccessibilityData, FirebaseError, DeleteAccessibilityVariables>): UseDataConnectMutationResult<DeleteAccessibilityData, DeleteAccessibilityVariables>;
export function useDeleteAccessibility(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteAccessibilityData, FirebaseError, DeleteAccessibilityVariables>): UseDataConnectMutationResult<DeleteAccessibilityData, DeleteAccessibilityVariables>;

export function useGetAccessibility(vars: GetAccessibilityVariables, options?: useDataConnectQueryOptions<GetAccessibilityData>): UseDataConnectQueryResult<GetAccessibilityData, GetAccessibilityVariables>;
export function useGetAccessibility(dc: DataConnect, vars: GetAccessibilityVariables, options?: useDataConnectQueryOptions<GetAccessibilityData>): UseDataConnectQueryResult<GetAccessibilityData, GetAccessibilityVariables>;

export function useListAccessibilityProfiles(options?: useDataConnectQueryOptions<ListAccessibilityProfilesData>): UseDataConnectQueryResult<ListAccessibilityProfilesData, undefined>;
export function useListAccessibilityProfiles(dc: DataConnect, options?: useDataConnectQueryOptions<ListAccessibilityProfilesData>): UseDataConnectQueryResult<ListAccessibilityProfilesData, undefined>;

export function useInsertMedia(options?: useDataConnectMutationOptions<InsertMediaData, FirebaseError, InsertMediaVariables>): UseDataConnectMutationResult<InsertMediaData, InsertMediaVariables>;
export function useInsertMedia(dc: DataConnect, options?: useDataConnectMutationOptions<InsertMediaData, FirebaseError, InsertMediaVariables>): UseDataConnectMutationResult<InsertMediaData, InsertMediaVariables>;

export function useUpdateMedia(options?: useDataConnectMutationOptions<UpdateMediaData, FirebaseError, UpdateMediaVariables>): UseDataConnectMutationResult<UpdateMediaData, UpdateMediaVariables>;
export function useUpdateMedia(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateMediaData, FirebaseError, UpdateMediaVariables>): UseDataConnectMutationResult<UpdateMediaData, UpdateMediaVariables>;

export function useDeleteMedia(options?: useDataConnectMutationOptions<DeleteMediaData, FirebaseError, DeleteMediaVariables>): UseDataConnectMutationResult<DeleteMediaData, DeleteMediaVariables>;
export function useDeleteMedia(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteMediaData, FirebaseError, DeleteMediaVariables>): UseDataConnectMutationResult<DeleteMediaData, DeleteMediaVariables>;

export function useGetMedia(vars: GetMediaVariables, options?: useDataConnectQueryOptions<GetMediaData>): UseDataConnectQueryResult<GetMediaData, GetMediaVariables>;
export function useGetMedia(dc: DataConnect, vars: GetMediaVariables, options?: useDataConnectQueryOptions<GetMediaData>): UseDataConnectQueryResult<GetMediaData, GetMediaVariables>;

export function useListMedia(options?: useDataConnectQueryOptions<ListMediaData>): UseDataConnectQueryResult<ListMediaData, undefined>;
export function useListMedia(dc: DataConnect, options?: useDataConnectQueryOptions<ListMediaData>): UseDataConnectQueryResult<ListMediaData, undefined>;

export function useInsertReport(options?: useDataConnectMutationOptions<InsertReportData, FirebaseError, InsertReportVariables>): UseDataConnectMutationResult<InsertReportData, InsertReportVariables>;
export function useInsertReport(dc: DataConnect, options?: useDataConnectMutationOptions<InsertReportData, FirebaseError, InsertReportVariables>): UseDataConnectMutationResult<InsertReportData, InsertReportVariables>;

export function useUpdateReport(options?: useDataConnectMutationOptions<UpdateReportData, FirebaseError, UpdateReportVariables>): UseDataConnectMutationResult<UpdateReportData, UpdateReportVariables>;
export function useUpdateReport(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateReportData, FirebaseError, UpdateReportVariables>): UseDataConnectMutationResult<UpdateReportData, UpdateReportVariables>;

export function useDeleteReport(options?: useDataConnectMutationOptions<DeleteReportData, FirebaseError, DeleteReportVariables>): UseDataConnectMutationResult<DeleteReportData, DeleteReportVariables>;
export function useDeleteReport(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteReportData, FirebaseError, DeleteReportVariables>): UseDataConnectMutationResult<DeleteReportData, DeleteReportVariables>;

export function useGetReport(vars: GetReportVariables, options?: useDataConnectQueryOptions<GetReportData>): UseDataConnectQueryResult<GetReportData, GetReportVariables>;
export function useGetReport(dc: DataConnect, vars: GetReportVariables, options?: useDataConnectQueryOptions<GetReportData>): UseDataConnectQueryResult<GetReportData, GetReportVariables>;

export function useListReports(options?: useDataConnectQueryOptions<ListReportsData>): UseDataConnectQueryResult<ListReportsData, undefined>;
export function useListReports(dc: DataConnect, options?: useDataConnectQueryOptions<ListReportsData>): UseDataConnectQueryResult<ListReportsData, undefined>;
