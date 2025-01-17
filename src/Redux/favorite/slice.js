import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const index = state.favoritesList.indexOf(payload);
      if (index === -1) {
        state.favoritesList.push(payload);
      } else {
        state.favoritesList.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
