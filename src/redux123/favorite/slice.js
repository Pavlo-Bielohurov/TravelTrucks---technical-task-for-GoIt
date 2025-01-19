import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const truck = action.payload;
      const alreadyThere = state.favoritesList.some(
        (item) => item.id === truck.id
      );
      if (!alreadyThere) {
        state.favoritesList.push(truck);
      }
    },
    removeFavorite: (state, action) => {
      const truckId = action.payload;
      state.favoritesList = state.favoritesList.filter(
        (truck) => truck.id !== truckId
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
