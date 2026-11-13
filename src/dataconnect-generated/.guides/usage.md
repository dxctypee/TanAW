# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useInsertUser, useUpdateUser, useDeleteUser, useGetMyUser, useListUsers, useInsertLocation, useUpdateLocation, useDeleteLocation, useGetLocation, useListLocations } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useInsertUser();

const { data, isPending, isSuccess, isError, error } = useUpdateUser(updateUserVars);

const { data, isPending, isSuccess, isError, error } = useDeleteUser();

const { data, isPending, isSuccess, isError, error } = useGetMyUser();

const { data, isPending, isSuccess, isError, error } = useListUsers();

const { data, isPending, isSuccess, isError, error } = useInsertLocation(insertLocationVars);

const { data, isPending, isSuccess, isError, error } = useUpdateLocation(updateLocationVars);

const { data, isPending, isSuccess, isError, error } = useDeleteLocation(deleteLocationVars);

const { data, isPending, isSuccess, isError, error } = useGetLocation(getLocationVars);

const { data, isPending, isSuccess, isError, error } = useListLocations();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { insertUser, updateUser, deleteUser, getMyUser, listUsers, insertLocation, updateLocation, deleteLocation, getLocation, listLocations } from '@dataconnect/generated';


// Operation InsertUser: 
const { data } = await InsertUser(dataConnect);

// Operation UpdateUser:  For variables, look at type UpdateUserVars in ../index.d.ts
const { data } = await UpdateUser(dataConnect, updateUserVars);

// Operation DeleteUser: 
const { data } = await DeleteUser(dataConnect);

// Operation GetMyUser: 
const { data } = await GetMyUser(dataConnect);

// Operation ListUsers: 
const { data } = await ListUsers(dataConnect);

// Operation InsertLocation:  For variables, look at type InsertLocationVars in ../index.d.ts
const { data } = await InsertLocation(dataConnect, insertLocationVars);

// Operation UpdateLocation:  For variables, look at type UpdateLocationVars in ../index.d.ts
const { data } = await UpdateLocation(dataConnect, updateLocationVars);

// Operation DeleteLocation:  For variables, look at type DeleteLocationVars in ../index.d.ts
const { data } = await DeleteLocation(dataConnect, deleteLocationVars);

// Operation GetLocation:  For variables, look at type GetLocationVars in ../index.d.ts
const { data } = await GetLocation(dataConnect, getLocationVars);

// Operation ListLocations: 
const { data } = await ListLocations(dataConnect);


```