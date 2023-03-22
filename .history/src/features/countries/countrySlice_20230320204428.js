import { createSlice } from "@reduxjs/toolkit";
import { showSingleCountry } from "./countryAction";

const initialState = {
  loading: true,
  singleCountryData: [],
  error: null,
  success: false,
};

export const countrySlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    addToFav: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(showSingleCountry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showSingleCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.singleCountryData = action.payload;
      })
      .addCase(showSingleCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.singleCountryData = [];
      });
  },
});

export const { addToFav } = countrySlice.actions;

export default countrySlice.reducer;
