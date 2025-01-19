import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  equipment: {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
  form: "",
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilters: (state, { payload }) => {
      const { name, checked } = payload;
      state.equipment[name] = checked;
    },
    setForm: (state, { payload }) => {
      state.form = payload;
    },
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
  },
});

export const { toggleFilters, setForm, setLocation } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
