# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyUser*](#getmyuser)
  - [*ListUsers*](#listusers)
  - [*GetLocation*](#getlocation)
  - [*ListLocations*](#listlocations)
  - [*GetAccessibility*](#getaccessibility)
  - [*ListAccessibilityProfiles*](#listaccessibilityprofiles)
  - [*GetMedia*](#getmedia)
  - [*ListMedia*](#listmedia)
  - [*GetReport*](#getreport)
  - [*ListReports*](#listreports)
- [**Mutations**](#mutations)
  - [*InsertUser*](#insertuser)
  - [*UpdateUser*](#updateuser)
  - [*DeleteUser*](#deleteuser)
  - [*InsertLocation*](#insertlocation)
  - [*UpdateLocation*](#updatelocation)
  - [*DeleteLocation*](#deletelocation)
  - [*InsertAccessibility*](#insertaccessibility)
  - [*UpdateAccessibility*](#updateaccessibility)
  - [*DeleteAccessibility*](#deleteaccessibility)
  - [*InsertMedia*](#insertmedia)
  - [*UpdateMedia*](#updatemedia)
  - [*DeleteMedia*](#deletemedia)
  - [*InsertReport*](#insertreport)
  - [*UpdateReport*](#updatereport)
  - [*DeleteReport*](#deletereport)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyUser
You can execute the `GetMyUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyUser(options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;

interface GetMyUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyUserData, undefined>;
}
export const getMyUserRef: GetMyUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;

interface GetMyUserRef {
  ...
  (dc: DataConnect): QueryRef<GetMyUserData, undefined>;
}
export const getMyUserRef: GetMyUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyUserRef:
```typescript
const name = getMyUserRef.operationName;
console.log(name);
```

### Variables
The `GetMyUser` query has no variables.
### Return Type
Recall that executing the `GetMyUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyUserData {
  user?: {
    username: string;
    pointsScore: number;
  };
}
```
### Using `GetMyUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyUser } from '@dataconnect/generated';


// Call the `getMyUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getMyUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetMyUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyUserRef } from '@dataconnect/generated';


// Call the `getMyUserRef()` function to get a reference to the query.
const ref = getMyUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    username: string;
  })[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@dataconnect/generated';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@dataconnect/generated';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetLocation
You can execute the `GetLocation` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getLocation(vars: GetLocationVariables, options?: ExecuteQueryOptions): QueryPromise<GetLocationData, GetLocationVariables>;

interface GetLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLocationVariables): QueryRef<GetLocationData, GetLocationVariables>;
}
export const getLocationRef: GetLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getLocation(dc: DataConnect, vars: GetLocationVariables, options?: ExecuteQueryOptions): QueryPromise<GetLocationData, GetLocationVariables>;

interface GetLocationRef {
  ...
  (dc: DataConnect, vars: GetLocationVariables): QueryRef<GetLocationData, GetLocationVariables>;
}
export const getLocationRef: GetLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getLocationRef:
```typescript
const name = getLocationRef.operationName;
console.log(name);
```

### Variables
The `GetLocation` query requires an argument of type `GetLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetLocationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetLocation` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetLocationData {
  location?: {
    name: string;
    address: string;
  };
}
```
### Using `GetLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getLocation, GetLocationVariables } from '@dataconnect/generated';

// The `GetLocation` query requires an argument of type `GetLocationVariables`:
const getLocationVars: GetLocationVariables = {
  id: ..., 
};

// Call the `getLocation()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getLocation(getLocationVars);
// Variables can be defined inline as well.
const { data } = await getLocation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getLocation(dataConnect, getLocationVars);

console.log(data.location);

// Or, you can use the `Promise` API.
getLocation(getLocationVars).then((response) => {
  const data = response.data;
  console.log(data.location);
});
```

### Using `GetLocation`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getLocationRef, GetLocationVariables } from '@dataconnect/generated';

// The `GetLocation` query requires an argument of type `GetLocationVariables`:
const getLocationVars: GetLocationVariables = {
  id: ..., 
};

// Call the `getLocationRef()` function to get a reference to the query.
const ref = getLocationRef(getLocationVars);
// Variables can be defined inline as well.
const ref = getLocationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getLocationRef(dataConnect, getLocationVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.location);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.location);
});
```

## ListLocations
You can execute the `ListLocations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listLocations(options?: ExecuteQueryOptions): QueryPromise<ListLocationsData, undefined>;

interface ListLocationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListLocationsData, undefined>;
}
export const listLocationsRef: ListLocationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listLocations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListLocationsData, undefined>;

interface ListLocationsRef {
  ...
  (dc: DataConnect): QueryRef<ListLocationsData, undefined>;
}
export const listLocationsRef: ListLocationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listLocationsRef:
```typescript
const name = listLocationsRef.operationName;
console.log(name);
```

### Variables
The `ListLocations` query has no variables.
### Return Type
Recall that executing the `ListLocations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListLocationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListLocationsData {
  locations: ({
    name: string;
    latitude: number;
    longitude: number;
  })[];
}
```
### Using `ListLocations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listLocations } from '@dataconnect/generated';


// Call the `listLocations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listLocations();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listLocations(dataConnect);

console.log(data.locations);

// Or, you can use the `Promise` API.
listLocations().then((response) => {
  const data = response.data;
  console.log(data.locations);
});
```

### Using `ListLocations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listLocationsRef } from '@dataconnect/generated';


// Call the `listLocationsRef()` function to get a reference to the query.
const ref = listLocationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listLocationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.locations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.locations);
});
```

## GetAccessibility
You can execute the `GetAccessibility` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAccessibility(vars: GetAccessibilityVariables, options?: ExecuteQueryOptions): QueryPromise<GetAccessibilityData, GetAccessibilityVariables>;

interface GetAccessibilityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAccessibilityVariables): QueryRef<GetAccessibilityData, GetAccessibilityVariables>;
}
export const getAccessibilityRef: GetAccessibilityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAccessibility(dc: DataConnect, vars: GetAccessibilityVariables, options?: ExecuteQueryOptions): QueryPromise<GetAccessibilityData, GetAccessibilityVariables>;

interface GetAccessibilityRef {
  ...
  (dc: DataConnect, vars: GetAccessibilityVariables): QueryRef<GetAccessibilityData, GetAccessibilityVariables>;
}
export const getAccessibilityRef: GetAccessibilityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAccessibilityRef:
```typescript
const name = getAccessibilityRef.operationName;
console.log(name);
```

### Variables
The `GetAccessibility` query requires an argument of type `GetAccessibilityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAccessibilityVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetAccessibility` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAccessibilityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAccessibilityData {
  accessibilityProfile?: {
    overallRating: number;
    isVerified: boolean;
  };
}
```
### Using `GetAccessibility`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAccessibility, GetAccessibilityVariables } from '@dataconnect/generated';

// The `GetAccessibility` query requires an argument of type `GetAccessibilityVariables`:
const getAccessibilityVars: GetAccessibilityVariables = {
  id: ..., 
};

// Call the `getAccessibility()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAccessibility(getAccessibilityVars);
// Variables can be defined inline as well.
const { data } = await getAccessibility({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAccessibility(dataConnect, getAccessibilityVars);

console.log(data.accessibilityProfile);

// Or, you can use the `Promise` API.
getAccessibility(getAccessibilityVars).then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfile);
});
```

### Using `GetAccessibility`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAccessibilityRef, GetAccessibilityVariables } from '@dataconnect/generated';

// The `GetAccessibility` query requires an argument of type `GetAccessibilityVariables`:
const getAccessibilityVars: GetAccessibilityVariables = {
  id: ..., 
};

// Call the `getAccessibilityRef()` function to get a reference to the query.
const ref = getAccessibilityRef(getAccessibilityVars);
// Variables can be defined inline as well.
const ref = getAccessibilityRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAccessibilityRef(dataConnect, getAccessibilityVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.accessibilityProfile);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfile);
});
```

## ListAccessibilityProfiles
You can execute the `ListAccessibilityProfiles` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAccessibilityProfiles(options?: ExecuteQueryOptions): QueryPromise<ListAccessibilityProfilesData, undefined>;

interface ListAccessibilityProfilesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAccessibilityProfilesData, undefined>;
}
export const listAccessibilityProfilesRef: ListAccessibilityProfilesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAccessibilityProfiles(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAccessibilityProfilesData, undefined>;

interface ListAccessibilityProfilesRef {
  ...
  (dc: DataConnect): QueryRef<ListAccessibilityProfilesData, undefined>;
}
export const listAccessibilityProfilesRef: ListAccessibilityProfilesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAccessibilityProfilesRef:
```typescript
const name = listAccessibilityProfilesRef.operationName;
console.log(name);
```

### Variables
The `ListAccessibilityProfiles` query has no variables.
### Return Type
Recall that executing the `ListAccessibilityProfiles` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAccessibilityProfilesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAccessibilityProfilesData {
  accessibilityProfiles: ({
    overallRating: number;
    hasRamp?: boolean | null;
  })[];
}
```
### Using `ListAccessibilityProfiles`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAccessibilityProfiles } from '@dataconnect/generated';


// Call the `listAccessibilityProfiles()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAccessibilityProfiles();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAccessibilityProfiles(dataConnect);

console.log(data.accessibilityProfiles);

// Or, you can use the `Promise` API.
listAccessibilityProfiles().then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfiles);
});
```

### Using `ListAccessibilityProfiles`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAccessibilityProfilesRef } from '@dataconnect/generated';


// Call the `listAccessibilityProfilesRef()` function to get a reference to the query.
const ref = listAccessibilityProfilesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAccessibilityProfilesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.accessibilityProfiles);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfiles);
});
```

## GetMedia
You can execute the `GetMedia` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMedia(vars: GetMediaVariables, options?: ExecuteQueryOptions): QueryPromise<GetMediaData, GetMediaVariables>;

interface GetMediaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMediaVariables): QueryRef<GetMediaData, GetMediaVariables>;
}
export const getMediaRef: GetMediaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMedia(dc: DataConnect, vars: GetMediaVariables, options?: ExecuteQueryOptions): QueryPromise<GetMediaData, GetMediaVariables>;

interface GetMediaRef {
  ...
  (dc: DataConnect, vars: GetMediaVariables): QueryRef<GetMediaData, GetMediaVariables>;
}
export const getMediaRef: GetMediaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMediaRef:
```typescript
const name = getMediaRef.operationName;
console.log(name);
```

### Variables
The `GetMedia` query requires an argument of type `GetMediaVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetMediaVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetMedia` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMediaData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMediaData {
  mediaAsset?: {
    url: string;
    analysisStatus: string;
  };
}
```
### Using `GetMedia`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMedia, GetMediaVariables } from '@dataconnect/generated';

// The `GetMedia` query requires an argument of type `GetMediaVariables`:
const getMediaVars: GetMediaVariables = {
  id: ..., 
};

// Call the `getMedia()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMedia(getMediaVars);
// Variables can be defined inline as well.
const { data } = await getMedia({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMedia(dataConnect, getMediaVars);

console.log(data.mediaAsset);

// Or, you can use the `Promise` API.
getMedia(getMediaVars).then((response) => {
  const data = response.data;
  console.log(data.mediaAsset);
});
```

### Using `GetMedia`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMediaRef, GetMediaVariables } from '@dataconnect/generated';

// The `GetMedia` query requires an argument of type `GetMediaVariables`:
const getMediaVars: GetMediaVariables = {
  id: ..., 
};

// Call the `getMediaRef()` function to get a reference to the query.
const ref = getMediaRef(getMediaVars);
// Variables can be defined inline as well.
const ref = getMediaRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMediaRef(dataConnect, getMediaVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.mediaAsset);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.mediaAsset);
});
```

## ListMedia
You can execute the `ListMedia` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMedia(options?: ExecuteQueryOptions): QueryPromise<ListMediaData, undefined>;

interface ListMediaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMediaData, undefined>;
}
export const listMediaRef: ListMediaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMedia(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMediaData, undefined>;

interface ListMediaRef {
  ...
  (dc: DataConnect): QueryRef<ListMediaData, undefined>;
}
export const listMediaRef: ListMediaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMediaRef:
```typescript
const name = listMediaRef.operationName;
console.log(name);
```

### Variables
The `ListMedia` query has no variables.
### Return Type
Recall that executing the `ListMedia` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMediaData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMediaData {
  mediaAssets: ({
    url: string;
    analysisStatus: string;
  })[];
}
```
### Using `ListMedia`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMedia } from '@dataconnect/generated';


// Call the `listMedia()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMedia();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMedia(dataConnect);

console.log(data.mediaAssets);

// Or, you can use the `Promise` API.
listMedia().then((response) => {
  const data = response.data;
  console.log(data.mediaAssets);
});
```

### Using `ListMedia`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMediaRef } from '@dataconnect/generated';


// Call the `listMediaRef()` function to get a reference to the query.
const ref = listMediaRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMediaRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.mediaAssets);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.mediaAssets);
});
```

## GetReport
You can execute the `GetReport` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getReport(vars: GetReportVariables, options?: ExecuteQueryOptions): QueryPromise<GetReportData, GetReportVariables>;

interface GetReportRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetReportVariables): QueryRef<GetReportData, GetReportVariables>;
}
export const getReportRef: GetReportRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getReport(dc: DataConnect, vars: GetReportVariables, options?: ExecuteQueryOptions): QueryPromise<GetReportData, GetReportVariables>;

interface GetReportRef {
  ...
  (dc: DataConnect, vars: GetReportVariables): QueryRef<GetReportData, GetReportVariables>;
}
export const getReportRef: GetReportRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getReportRef:
```typescript
const name = getReportRef.operationName;
console.log(name);
```

### Variables
The `GetReport` query requires an argument of type `GetReportVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetReportVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetReport` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetReportData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetReportData {
  report?: {
    reportType: string;
    comments?: string | null;
  };
}
```
### Using `GetReport`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getReport, GetReportVariables } from '@dataconnect/generated';

// The `GetReport` query requires an argument of type `GetReportVariables`:
const getReportVars: GetReportVariables = {
  id: ..., 
};

// Call the `getReport()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getReport(getReportVars);
// Variables can be defined inline as well.
const { data } = await getReport({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getReport(dataConnect, getReportVars);

console.log(data.report);

// Or, you can use the `Promise` API.
getReport(getReportVars).then((response) => {
  const data = response.data;
  console.log(data.report);
});
```

### Using `GetReport`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getReportRef, GetReportVariables } from '@dataconnect/generated';

// The `GetReport` query requires an argument of type `GetReportVariables`:
const getReportVars: GetReportVariables = {
  id: ..., 
};

// Call the `getReportRef()` function to get a reference to the query.
const ref = getReportRef(getReportVars);
// Variables can be defined inline as well.
const ref = getReportRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getReportRef(dataConnect, getReportVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.report);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.report);
});
```

## ListReports
You can execute the `ListReports` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listReports(options?: ExecuteQueryOptions): QueryPromise<ListReportsData, undefined>;

interface ListReportsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListReportsData, undefined>;
}
export const listReportsRef: ListReportsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listReports(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListReportsData, undefined>;

interface ListReportsRef {
  ...
  (dc: DataConnect): QueryRef<ListReportsData, undefined>;
}
export const listReportsRef: ListReportsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listReportsRef:
```typescript
const name = listReportsRef.operationName;
console.log(name);
```

### Variables
The `ListReports` query has no variables.
### Return Type
Recall that executing the `ListReports` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListReportsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListReportsData {
  reports: ({
    reportType: string;
    timestamp: TimestampString;
  })[];
}
```
### Using `ListReports`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listReports } from '@dataconnect/generated';


// Call the `listReports()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listReports();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listReports(dataConnect);

console.log(data.reports);

// Or, you can use the `Promise` API.
listReports().then((response) => {
  const data = response.data;
  console.log(data.reports);
});
```

### Using `ListReports`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listReportsRef } from '@dataconnect/generated';


// Call the `listReportsRef()` function to get a reference to the query.
const ref = listReportsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listReportsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reports);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reports);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## InsertUser
You can execute the `InsertUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertUser(): MutationPromise<InsertUserData, undefined>;

interface InsertUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertUserData, undefined>;
}
export const insertUserRef: InsertUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertUser(dc: DataConnect): MutationPromise<InsertUserData, undefined>;

interface InsertUserRef {
  ...
  (dc: DataConnect): MutationRef<InsertUserData, undefined>;
}
export const insertUserRef: InsertUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertUserRef:
```typescript
const name = insertUserRef.operationName;
console.log(name);
```

### Variables
The `InsertUser` mutation has no variables.
### Return Type
Recall that executing the `InsertUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertUserData {
  user_insert: User_Key;
}
```
### Using `InsertUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertUser } from '@dataconnect/generated';


// Call the `insertUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
insertUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `InsertUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertUserRef } from '@dataconnect/generated';


// Call the `insertUserRef()` function to get a reference to the mutation.
const ref = insertUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserVariables {
  username: string;
}
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  username: ..., 
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ username: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  username: ..., 
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ username: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## InsertLocation
You can execute the `InsertLocation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertLocation(vars: InsertLocationVariables): MutationPromise<InsertLocationData, InsertLocationVariables>;

interface InsertLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertLocationVariables): MutationRef<InsertLocationData, InsertLocationVariables>;
}
export const insertLocationRef: InsertLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertLocation(dc: DataConnect, vars: InsertLocationVariables): MutationPromise<InsertLocationData, InsertLocationVariables>;

interface InsertLocationRef {
  ...
  (dc: DataConnect, vars: InsertLocationVariables): MutationRef<InsertLocationData, InsertLocationVariables>;
}
export const insertLocationRef: InsertLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertLocationRef:
```typescript
const name = insertLocationRef.operationName;
console.log(name);
```

### Variables
The `InsertLocation` mutation requires an argument of type `InsertLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface InsertLocationVariables {
  name: string;
  lat: number;
  lon: number;
  addr: string;
}
```
### Return Type
Recall that executing the `InsertLocation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertLocationData {
  location_insert: Location_Key;
}
```
### Using `InsertLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertLocation, InsertLocationVariables } from '@dataconnect/generated';

// The `InsertLocation` mutation requires an argument of type `InsertLocationVariables`:
const insertLocationVars: InsertLocationVariables = {
  name: ..., 
  lat: ..., 
  lon: ..., 
  addr: ..., 
};

// Call the `insertLocation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertLocation(insertLocationVars);
// Variables can be defined inline as well.
const { data } = await insertLocation({ name: ..., lat: ..., lon: ..., addr: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertLocation(dataConnect, insertLocationVars);

console.log(data.location_insert);

// Or, you can use the `Promise` API.
insertLocation(insertLocationVars).then((response) => {
  const data = response.data;
  console.log(data.location_insert);
});
```

### Using `InsertLocation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertLocationRef, InsertLocationVariables } from '@dataconnect/generated';

// The `InsertLocation` mutation requires an argument of type `InsertLocationVariables`:
const insertLocationVars: InsertLocationVariables = {
  name: ..., 
  lat: ..., 
  lon: ..., 
  addr: ..., 
};

// Call the `insertLocationRef()` function to get a reference to the mutation.
const ref = insertLocationRef(insertLocationVars);
// Variables can be defined inline as well.
const ref = insertLocationRef({ name: ..., lat: ..., lon: ..., addr: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertLocationRef(dataConnect, insertLocationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.location_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.location_insert);
});
```

## UpdateLocation
You can execute the `UpdateLocation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateLocation(vars: UpdateLocationVariables): MutationPromise<UpdateLocationData, UpdateLocationVariables>;

interface UpdateLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLocationVariables): MutationRef<UpdateLocationData, UpdateLocationVariables>;
}
export const updateLocationRef: UpdateLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateLocation(dc: DataConnect, vars: UpdateLocationVariables): MutationPromise<UpdateLocationData, UpdateLocationVariables>;

interface UpdateLocationRef {
  ...
  (dc: DataConnect, vars: UpdateLocationVariables): MutationRef<UpdateLocationData, UpdateLocationVariables>;
}
export const updateLocationRef: UpdateLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateLocationRef:
```typescript
const name = updateLocationRef.operationName;
console.log(name);
```

### Variables
The `UpdateLocation` mutation requires an argument of type `UpdateLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateLocationVariables {
  id: UUIDString;
  website: string;
}
```
### Return Type
Recall that executing the `UpdateLocation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateLocationData {
  location_update?: Location_Key | null;
}
```
### Using `UpdateLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateLocation, UpdateLocationVariables } from '@dataconnect/generated';

// The `UpdateLocation` mutation requires an argument of type `UpdateLocationVariables`:
const updateLocationVars: UpdateLocationVariables = {
  id: ..., 
  website: ..., 
};

// Call the `updateLocation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateLocation(updateLocationVars);
// Variables can be defined inline as well.
const { data } = await updateLocation({ id: ..., website: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateLocation(dataConnect, updateLocationVars);

console.log(data.location_update);

// Or, you can use the `Promise` API.
updateLocation(updateLocationVars).then((response) => {
  const data = response.data;
  console.log(data.location_update);
});
```

### Using `UpdateLocation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateLocationRef, UpdateLocationVariables } from '@dataconnect/generated';

// The `UpdateLocation` mutation requires an argument of type `UpdateLocationVariables`:
const updateLocationVars: UpdateLocationVariables = {
  id: ..., 
  website: ..., 
};

// Call the `updateLocationRef()` function to get a reference to the mutation.
const ref = updateLocationRef(updateLocationVars);
// Variables can be defined inline as well.
const ref = updateLocationRef({ id: ..., website: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateLocationRef(dataConnect, updateLocationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.location_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.location_update);
});
```

## DeleteLocation
You can execute the `DeleteLocation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteLocation(vars: DeleteLocationVariables): MutationPromise<DeleteLocationData, DeleteLocationVariables>;

interface DeleteLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLocationVariables): MutationRef<DeleteLocationData, DeleteLocationVariables>;
}
export const deleteLocationRef: DeleteLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteLocation(dc: DataConnect, vars: DeleteLocationVariables): MutationPromise<DeleteLocationData, DeleteLocationVariables>;

interface DeleteLocationRef {
  ...
  (dc: DataConnect, vars: DeleteLocationVariables): MutationRef<DeleteLocationData, DeleteLocationVariables>;
}
export const deleteLocationRef: DeleteLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteLocationRef:
```typescript
const name = deleteLocationRef.operationName;
console.log(name);
```

### Variables
The `DeleteLocation` mutation requires an argument of type `DeleteLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteLocationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteLocation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteLocationData {
  location_delete?: Location_Key | null;
}
```
### Using `DeleteLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteLocation, DeleteLocationVariables } from '@dataconnect/generated';

// The `DeleteLocation` mutation requires an argument of type `DeleteLocationVariables`:
const deleteLocationVars: DeleteLocationVariables = {
  id: ..., 
};

// Call the `deleteLocation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteLocation(deleteLocationVars);
// Variables can be defined inline as well.
const { data } = await deleteLocation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteLocation(dataConnect, deleteLocationVars);

console.log(data.location_delete);

// Or, you can use the `Promise` API.
deleteLocation(deleteLocationVars).then((response) => {
  const data = response.data;
  console.log(data.location_delete);
});
```

### Using `DeleteLocation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteLocationRef, DeleteLocationVariables } from '@dataconnect/generated';

// The `DeleteLocation` mutation requires an argument of type `DeleteLocationVariables`:
const deleteLocationVars: DeleteLocationVariables = {
  id: ..., 
};

// Call the `deleteLocationRef()` function to get a reference to the mutation.
const ref = deleteLocationRef(deleteLocationVars);
// Variables can be defined inline as well.
const ref = deleteLocationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteLocationRef(dataConnect, deleteLocationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.location_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.location_delete);
});
```

## InsertAccessibility
You can execute the `InsertAccessibility` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertAccessibility(vars: InsertAccessibilityVariables): MutationPromise<InsertAccessibilityData, InsertAccessibilityVariables>;

interface InsertAccessibilityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertAccessibilityVariables): MutationRef<InsertAccessibilityData, InsertAccessibilityVariables>;
}
export const insertAccessibilityRef: InsertAccessibilityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertAccessibility(dc: DataConnect, vars: InsertAccessibilityVariables): MutationPromise<InsertAccessibilityData, InsertAccessibilityVariables>;

interface InsertAccessibilityRef {
  ...
  (dc: DataConnect, vars: InsertAccessibilityVariables): MutationRef<InsertAccessibilityData, InsertAccessibilityVariables>;
}
export const insertAccessibilityRef: InsertAccessibilityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertAccessibilityRef:
```typescript
const name = insertAccessibilityRef.operationName;
console.log(name);
```

### Variables
The `InsertAccessibility` mutation requires an argument of type `InsertAccessibilityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface InsertAccessibilityVariables {
  locId: UUIDString;
  rating: number;
}
```
### Return Type
Recall that executing the `InsertAccessibility` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertAccessibilityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertAccessibilityData {
  accessibilityProfile_insert: AccessibilityProfile_Key;
}
```
### Using `InsertAccessibility`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertAccessibility, InsertAccessibilityVariables } from '@dataconnect/generated';

// The `InsertAccessibility` mutation requires an argument of type `InsertAccessibilityVariables`:
const insertAccessibilityVars: InsertAccessibilityVariables = {
  locId: ..., 
  rating: ..., 
};

// Call the `insertAccessibility()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertAccessibility(insertAccessibilityVars);
// Variables can be defined inline as well.
const { data } = await insertAccessibility({ locId: ..., rating: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertAccessibility(dataConnect, insertAccessibilityVars);

console.log(data.accessibilityProfile_insert);

// Or, you can use the `Promise` API.
insertAccessibility(insertAccessibilityVars).then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfile_insert);
});
```

### Using `InsertAccessibility`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertAccessibilityRef, InsertAccessibilityVariables } from '@dataconnect/generated';

// The `InsertAccessibility` mutation requires an argument of type `InsertAccessibilityVariables`:
const insertAccessibilityVars: InsertAccessibilityVariables = {
  locId: ..., 
  rating: ..., 
};

// Call the `insertAccessibilityRef()` function to get a reference to the mutation.
const ref = insertAccessibilityRef(insertAccessibilityVars);
// Variables can be defined inline as well.
const ref = insertAccessibilityRef({ locId: ..., rating: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertAccessibilityRef(dataConnect, insertAccessibilityVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.accessibilityProfile_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfile_insert);
});
```

## UpdateAccessibility
You can execute the `UpdateAccessibility` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateAccessibility(vars: UpdateAccessibilityVariables): MutationPromise<UpdateAccessibilityData, UpdateAccessibilityVariables>;

interface UpdateAccessibilityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAccessibilityVariables): MutationRef<UpdateAccessibilityData, UpdateAccessibilityVariables>;
}
export const updateAccessibilityRef: UpdateAccessibilityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateAccessibility(dc: DataConnect, vars: UpdateAccessibilityVariables): MutationPromise<UpdateAccessibilityData, UpdateAccessibilityVariables>;

interface UpdateAccessibilityRef {
  ...
  (dc: DataConnect, vars: UpdateAccessibilityVariables): MutationRef<UpdateAccessibilityData, UpdateAccessibilityVariables>;
}
export const updateAccessibilityRef: UpdateAccessibilityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateAccessibilityRef:
```typescript
const name = updateAccessibilityRef.operationName;
console.log(name);
```

### Variables
The `UpdateAccessibility` mutation requires an argument of type `UpdateAccessibilityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateAccessibilityVariables {
  id: UUIDString;
  hasRamp: boolean;
}
```
### Return Type
Recall that executing the `UpdateAccessibility` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateAccessibilityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateAccessibilityData {
  accessibilityProfile_update?: AccessibilityProfile_Key | null;
}
```
### Using `UpdateAccessibility`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateAccessibility, UpdateAccessibilityVariables } from '@dataconnect/generated';

// The `UpdateAccessibility` mutation requires an argument of type `UpdateAccessibilityVariables`:
const updateAccessibilityVars: UpdateAccessibilityVariables = {
  id: ..., 
  hasRamp: ..., 
};

// Call the `updateAccessibility()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateAccessibility(updateAccessibilityVars);
// Variables can be defined inline as well.
const { data } = await updateAccessibility({ id: ..., hasRamp: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateAccessibility(dataConnect, updateAccessibilityVars);

console.log(data.accessibilityProfile_update);

// Or, you can use the `Promise` API.
updateAccessibility(updateAccessibilityVars).then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfile_update);
});
```

### Using `UpdateAccessibility`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateAccessibilityRef, UpdateAccessibilityVariables } from '@dataconnect/generated';

// The `UpdateAccessibility` mutation requires an argument of type `UpdateAccessibilityVariables`:
const updateAccessibilityVars: UpdateAccessibilityVariables = {
  id: ..., 
  hasRamp: ..., 
};

// Call the `updateAccessibilityRef()` function to get a reference to the mutation.
const ref = updateAccessibilityRef(updateAccessibilityVars);
// Variables can be defined inline as well.
const ref = updateAccessibilityRef({ id: ..., hasRamp: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateAccessibilityRef(dataConnect, updateAccessibilityVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.accessibilityProfile_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfile_update);
});
```

## DeleteAccessibility
You can execute the `DeleteAccessibility` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteAccessibility(vars: DeleteAccessibilityVariables): MutationPromise<DeleteAccessibilityData, DeleteAccessibilityVariables>;

interface DeleteAccessibilityRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAccessibilityVariables): MutationRef<DeleteAccessibilityData, DeleteAccessibilityVariables>;
}
export const deleteAccessibilityRef: DeleteAccessibilityRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteAccessibility(dc: DataConnect, vars: DeleteAccessibilityVariables): MutationPromise<DeleteAccessibilityData, DeleteAccessibilityVariables>;

interface DeleteAccessibilityRef {
  ...
  (dc: DataConnect, vars: DeleteAccessibilityVariables): MutationRef<DeleteAccessibilityData, DeleteAccessibilityVariables>;
}
export const deleteAccessibilityRef: DeleteAccessibilityRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteAccessibilityRef:
```typescript
const name = deleteAccessibilityRef.operationName;
console.log(name);
```

### Variables
The `DeleteAccessibility` mutation requires an argument of type `DeleteAccessibilityVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteAccessibilityVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteAccessibility` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteAccessibilityData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteAccessibilityData {
  accessibilityProfile_delete?: AccessibilityProfile_Key | null;
}
```
### Using `DeleteAccessibility`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteAccessibility, DeleteAccessibilityVariables } from '@dataconnect/generated';

// The `DeleteAccessibility` mutation requires an argument of type `DeleteAccessibilityVariables`:
const deleteAccessibilityVars: DeleteAccessibilityVariables = {
  id: ..., 
};

// Call the `deleteAccessibility()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteAccessibility(deleteAccessibilityVars);
// Variables can be defined inline as well.
const { data } = await deleteAccessibility({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteAccessibility(dataConnect, deleteAccessibilityVars);

console.log(data.accessibilityProfile_delete);

// Or, you can use the `Promise` API.
deleteAccessibility(deleteAccessibilityVars).then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfile_delete);
});
```

### Using `DeleteAccessibility`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteAccessibilityRef, DeleteAccessibilityVariables } from '@dataconnect/generated';

// The `DeleteAccessibility` mutation requires an argument of type `DeleteAccessibilityVariables`:
const deleteAccessibilityVars: DeleteAccessibilityVariables = {
  id: ..., 
};

// Call the `deleteAccessibilityRef()` function to get a reference to the mutation.
const ref = deleteAccessibilityRef(deleteAccessibilityVars);
// Variables can be defined inline as well.
const ref = deleteAccessibilityRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteAccessibilityRef(dataConnect, deleteAccessibilityVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.accessibilityProfile_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.accessibilityProfile_delete);
});
```

## InsertMedia
You can execute the `InsertMedia` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertMedia(vars: InsertMediaVariables): MutationPromise<InsertMediaData, InsertMediaVariables>;

interface InsertMediaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertMediaVariables): MutationRef<InsertMediaData, InsertMediaVariables>;
}
export const insertMediaRef: InsertMediaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertMedia(dc: DataConnect, vars: InsertMediaVariables): MutationPromise<InsertMediaData, InsertMediaVariables>;

interface InsertMediaRef {
  ...
  (dc: DataConnect, vars: InsertMediaVariables): MutationRef<InsertMediaData, InsertMediaVariables>;
}
export const insertMediaRef: InsertMediaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertMediaRef:
```typescript
const name = insertMediaRef.operationName;
console.log(name);
```

### Variables
The `InsertMedia` mutation requires an argument of type `InsertMediaVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface InsertMediaVariables {
  locId: UUIDString;
  url: string;
}
```
### Return Type
Recall that executing the `InsertMedia` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertMediaData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertMediaData {
  mediaAsset_insert: MediaAsset_Key;
}
```
### Using `InsertMedia`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertMedia, InsertMediaVariables } from '@dataconnect/generated';

// The `InsertMedia` mutation requires an argument of type `InsertMediaVariables`:
const insertMediaVars: InsertMediaVariables = {
  locId: ..., 
  url: ..., 
};

// Call the `insertMedia()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertMedia(insertMediaVars);
// Variables can be defined inline as well.
const { data } = await insertMedia({ locId: ..., url: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertMedia(dataConnect, insertMediaVars);

console.log(data.mediaAsset_insert);

// Or, you can use the `Promise` API.
insertMedia(insertMediaVars).then((response) => {
  const data = response.data;
  console.log(data.mediaAsset_insert);
});
```

### Using `InsertMedia`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertMediaRef, InsertMediaVariables } from '@dataconnect/generated';

// The `InsertMedia` mutation requires an argument of type `InsertMediaVariables`:
const insertMediaVars: InsertMediaVariables = {
  locId: ..., 
  url: ..., 
};

// Call the `insertMediaRef()` function to get a reference to the mutation.
const ref = insertMediaRef(insertMediaVars);
// Variables can be defined inline as well.
const ref = insertMediaRef({ locId: ..., url: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertMediaRef(dataConnect, insertMediaVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mediaAsset_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mediaAsset_insert);
});
```

## UpdateMedia
You can execute the `UpdateMedia` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateMedia(vars: UpdateMediaVariables): MutationPromise<UpdateMediaData, UpdateMediaVariables>;

interface UpdateMediaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMediaVariables): MutationRef<UpdateMediaData, UpdateMediaVariables>;
}
export const updateMediaRef: UpdateMediaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateMedia(dc: DataConnect, vars: UpdateMediaVariables): MutationPromise<UpdateMediaData, UpdateMediaVariables>;

interface UpdateMediaRef {
  ...
  (dc: DataConnect, vars: UpdateMediaVariables): MutationRef<UpdateMediaData, UpdateMediaVariables>;
}
export const updateMediaRef: UpdateMediaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateMediaRef:
```typescript
const name = updateMediaRef.operationName;
console.log(name);
```

### Variables
The `UpdateMedia` mutation requires an argument of type `UpdateMediaVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateMediaVariables {
  id: UUIDString;
  status: string;
}
```
### Return Type
Recall that executing the `UpdateMedia` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateMediaData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateMediaData {
  mediaAsset_update?: MediaAsset_Key | null;
}
```
### Using `UpdateMedia`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateMedia, UpdateMediaVariables } from '@dataconnect/generated';

// The `UpdateMedia` mutation requires an argument of type `UpdateMediaVariables`:
const updateMediaVars: UpdateMediaVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateMedia()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateMedia(updateMediaVars);
// Variables can be defined inline as well.
const { data } = await updateMedia({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateMedia(dataConnect, updateMediaVars);

console.log(data.mediaAsset_update);

// Or, you can use the `Promise` API.
updateMedia(updateMediaVars).then((response) => {
  const data = response.data;
  console.log(data.mediaAsset_update);
});
```

### Using `UpdateMedia`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateMediaRef, UpdateMediaVariables } from '@dataconnect/generated';

// The `UpdateMedia` mutation requires an argument of type `UpdateMediaVariables`:
const updateMediaVars: UpdateMediaVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateMediaRef()` function to get a reference to the mutation.
const ref = updateMediaRef(updateMediaVars);
// Variables can be defined inline as well.
const ref = updateMediaRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateMediaRef(dataConnect, updateMediaVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mediaAsset_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mediaAsset_update);
});
```

## DeleteMedia
You can execute the `DeleteMedia` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteMedia(vars: DeleteMediaVariables): MutationPromise<DeleteMediaData, DeleteMediaVariables>;

interface DeleteMediaRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteMediaVariables): MutationRef<DeleteMediaData, DeleteMediaVariables>;
}
export const deleteMediaRef: DeleteMediaRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteMedia(dc: DataConnect, vars: DeleteMediaVariables): MutationPromise<DeleteMediaData, DeleteMediaVariables>;

interface DeleteMediaRef {
  ...
  (dc: DataConnect, vars: DeleteMediaVariables): MutationRef<DeleteMediaData, DeleteMediaVariables>;
}
export const deleteMediaRef: DeleteMediaRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteMediaRef:
```typescript
const name = deleteMediaRef.operationName;
console.log(name);
```

### Variables
The `DeleteMedia` mutation requires an argument of type `DeleteMediaVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteMediaVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteMedia` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteMediaData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteMediaData {
  mediaAsset_delete?: MediaAsset_Key | null;
}
```
### Using `DeleteMedia`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteMedia, DeleteMediaVariables } from '@dataconnect/generated';

// The `DeleteMedia` mutation requires an argument of type `DeleteMediaVariables`:
const deleteMediaVars: DeleteMediaVariables = {
  id: ..., 
};

// Call the `deleteMedia()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteMedia(deleteMediaVars);
// Variables can be defined inline as well.
const { data } = await deleteMedia({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteMedia(dataConnect, deleteMediaVars);

console.log(data.mediaAsset_delete);

// Or, you can use the `Promise` API.
deleteMedia(deleteMediaVars).then((response) => {
  const data = response.data;
  console.log(data.mediaAsset_delete);
});
```

### Using `DeleteMedia`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteMediaRef, DeleteMediaVariables } from '@dataconnect/generated';

// The `DeleteMedia` mutation requires an argument of type `DeleteMediaVariables`:
const deleteMediaVars: DeleteMediaVariables = {
  id: ..., 
};

// Call the `deleteMediaRef()` function to get a reference to the mutation.
const ref = deleteMediaRef(deleteMediaVars);
// Variables can be defined inline as well.
const ref = deleteMediaRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteMediaRef(dataConnect, deleteMediaVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mediaAsset_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mediaAsset_delete);
});
```

## InsertReport
You can execute the `InsertReport` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertReport(vars: InsertReportVariables): MutationPromise<InsertReportData, InsertReportVariables>;

interface InsertReportRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertReportVariables): MutationRef<InsertReportData, InsertReportVariables>;
}
export const insertReportRef: InsertReportRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertReport(dc: DataConnect, vars: InsertReportVariables): MutationPromise<InsertReportData, InsertReportVariables>;

interface InsertReportRef {
  ...
  (dc: DataConnect, vars: InsertReportVariables): MutationRef<InsertReportData, InsertReportVariables>;
}
export const insertReportRef: InsertReportRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertReportRef:
```typescript
const name = insertReportRef.operationName;
console.log(name);
```

### Variables
The `InsertReport` mutation requires an argument of type `InsertReportVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface InsertReportVariables {
  locId: UUIDString;
  type: string;
  ts: TimestampString;
}
```
### Return Type
Recall that executing the `InsertReport` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertReportData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertReportData {
  report_insert: Report_Key;
}
```
### Using `InsertReport`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertReport, InsertReportVariables } from '@dataconnect/generated';

// The `InsertReport` mutation requires an argument of type `InsertReportVariables`:
const insertReportVars: InsertReportVariables = {
  locId: ..., 
  type: ..., 
  ts: ..., 
};

// Call the `insertReport()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertReport(insertReportVars);
// Variables can be defined inline as well.
const { data } = await insertReport({ locId: ..., type: ..., ts: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertReport(dataConnect, insertReportVars);

console.log(data.report_insert);

// Or, you can use the `Promise` API.
insertReport(insertReportVars).then((response) => {
  const data = response.data;
  console.log(data.report_insert);
});
```

### Using `InsertReport`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertReportRef, InsertReportVariables } from '@dataconnect/generated';

// The `InsertReport` mutation requires an argument of type `InsertReportVariables`:
const insertReportVars: InsertReportVariables = {
  locId: ..., 
  type: ..., 
  ts: ..., 
};

// Call the `insertReportRef()` function to get a reference to the mutation.
const ref = insertReportRef(insertReportVars);
// Variables can be defined inline as well.
const ref = insertReportRef({ locId: ..., type: ..., ts: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertReportRef(dataConnect, insertReportVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.report_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.report_insert);
});
```

## UpdateReport
You can execute the `UpdateReport` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateReport(vars: UpdateReportVariables): MutationPromise<UpdateReportData, UpdateReportVariables>;

interface UpdateReportRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReportVariables): MutationRef<UpdateReportData, UpdateReportVariables>;
}
export const updateReportRef: UpdateReportRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateReport(dc: DataConnect, vars: UpdateReportVariables): MutationPromise<UpdateReportData, UpdateReportVariables>;

interface UpdateReportRef {
  ...
  (dc: DataConnect, vars: UpdateReportVariables): MutationRef<UpdateReportData, UpdateReportVariables>;
}
export const updateReportRef: UpdateReportRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateReportRef:
```typescript
const name = updateReportRef.operationName;
console.log(name);
```

### Variables
The `UpdateReport` mutation requires an argument of type `UpdateReportVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateReportVariables {
  id: UUIDString;
  comments: string;
}
```
### Return Type
Recall that executing the `UpdateReport` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateReportData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateReportData {
  report_update?: Report_Key | null;
}
```
### Using `UpdateReport`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateReport, UpdateReportVariables } from '@dataconnect/generated';

// The `UpdateReport` mutation requires an argument of type `UpdateReportVariables`:
const updateReportVars: UpdateReportVariables = {
  id: ..., 
  comments: ..., 
};

// Call the `updateReport()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateReport(updateReportVars);
// Variables can be defined inline as well.
const { data } = await updateReport({ id: ..., comments: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateReport(dataConnect, updateReportVars);

console.log(data.report_update);

// Or, you can use the `Promise` API.
updateReport(updateReportVars).then((response) => {
  const data = response.data;
  console.log(data.report_update);
});
```

### Using `UpdateReport`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateReportRef, UpdateReportVariables } from '@dataconnect/generated';

// The `UpdateReport` mutation requires an argument of type `UpdateReportVariables`:
const updateReportVars: UpdateReportVariables = {
  id: ..., 
  comments: ..., 
};

// Call the `updateReportRef()` function to get a reference to the mutation.
const ref = updateReportRef(updateReportVars);
// Variables can be defined inline as well.
const ref = updateReportRef({ id: ..., comments: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateReportRef(dataConnect, updateReportVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.report_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.report_update);
});
```

## DeleteReport
You can execute the `DeleteReport` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteReport(vars: DeleteReportVariables): MutationPromise<DeleteReportData, DeleteReportVariables>;

interface DeleteReportRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReportVariables): MutationRef<DeleteReportData, DeleteReportVariables>;
}
export const deleteReportRef: DeleteReportRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteReport(dc: DataConnect, vars: DeleteReportVariables): MutationPromise<DeleteReportData, DeleteReportVariables>;

interface DeleteReportRef {
  ...
  (dc: DataConnect, vars: DeleteReportVariables): MutationRef<DeleteReportData, DeleteReportVariables>;
}
export const deleteReportRef: DeleteReportRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteReportRef:
```typescript
const name = deleteReportRef.operationName;
console.log(name);
```

### Variables
The `DeleteReport` mutation requires an argument of type `DeleteReportVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteReportVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteReport` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteReportData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteReportData {
  report_delete?: Report_Key | null;
}
```
### Using `DeleteReport`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteReport, DeleteReportVariables } from '@dataconnect/generated';

// The `DeleteReport` mutation requires an argument of type `DeleteReportVariables`:
const deleteReportVars: DeleteReportVariables = {
  id: ..., 
};

// Call the `deleteReport()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteReport(deleteReportVars);
// Variables can be defined inline as well.
const { data } = await deleteReport({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteReport(dataConnect, deleteReportVars);

console.log(data.report_delete);

// Or, you can use the `Promise` API.
deleteReport(deleteReportVars).then((response) => {
  const data = response.data;
  console.log(data.report_delete);
});
```

### Using `DeleteReport`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteReportRef, DeleteReportVariables } from '@dataconnect/generated';

// The `DeleteReport` mutation requires an argument of type `DeleteReportVariables`:
const deleteReportVars: DeleteReportVariables = {
  id: ..., 
};

// Call the `deleteReportRef()` function to get a reference to the mutation.
const ref = deleteReportRef(deleteReportVars);
// Variables can be defined inline as well.
const ref = deleteReportRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteReportRef(dataConnect, deleteReportVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.report_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.report_delete);
});
```

