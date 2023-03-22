import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries } from "./countriesAction";
import { showSingleCountry } from "./countryAction";

const initialState = {
  loading: true,
  countriesData: [],
  countryData: [],
  error: null,
  success: false,
};

export const countriesSlice = createSlice({
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
      })
      .addCase(showSingleCountry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showSingleCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.countryData = action.payload;
      })
      .addCase(showSingleCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.countriesData = [];
      });
  },
});

export default countriesSlice.reducer;
