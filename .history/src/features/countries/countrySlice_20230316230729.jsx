import { createSlice } from "@reduxjs/toolkit";
import { showSingleCountry } from "./countryAction";

const initialState = {
  loading: true,
  countriesData: [],
  singleCountryData: [],
  error: null,
  success: false,
};

export const countrySlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.countriesData = action.payload;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.countriesData = [];
      });
  },
});

export default countrySlice.reducer;
