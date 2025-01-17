import { createSlice } from "@reduxjs/toolkit";
import { getAllTrucks, getTruckById } from "./operations";

const initialState = {
  items: [],
  itemById: null,
  isLoading: false,
  isError: null,
  page: 1,
  limit: 4,
  totalItems: 0,
  hasNextPage: false,
};

const calculateHasNextPage = (state) => {
  const totalPages = Math.ceil(state.totalItems / state.limit);
  state.hasNextPage = state.page < totalPages;
};

const handlePending = (state) => {
  state.isError = null;
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

export const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    resetPage(state) {
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTrucks.pending, handlePending)
      .addCase(getAllTrucks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (state.page === 1) {
          state.items = payload.items;
        } else {
          state.items.push(...payload.items);
        }
        state.totalItems = payload.total;
        calculateHasNextPage(state);
      })
      .addCase(getAllTrucks.rejected, (state, action) => {
        handleRejected(state, action);
        state.items = [];
        state.totalItems = 0;
      })
      .addCase(getTruckById.pending, handlePending)
      .addCase(getTruckById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.itemById = payload;
      })
      .addCase(getTruckById.rejected, (state, action) => {
        handleRejected(state, action);
        state.itemById = null;
      });
  },
});

export const { resetPage, incrementPage } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;
