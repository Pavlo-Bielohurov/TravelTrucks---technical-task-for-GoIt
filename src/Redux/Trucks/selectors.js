export const selectTrucks = (state) => state.trucks.items;

export const selectTruckById = (state) => state.trucks.itemById;

export const selectIsLoading = (state) => state.trucks.isLoading;

export const selectError = (state) => state.trucks.isError;

export const selectPage = (state) => state.trucks.page;

export const selectLimit = (state) => state.trucks.limit;

export const selectHasNextPage = (state) => state.trucks.hasNextPage;

export const selectTotalItems = (state) => state.trucks.totalItems;
