import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries } from "./countriesAction";

const initialState = {
  loading: false,
  countriesData: [],
  singleCountryData: [],
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
      });
  },
});

export const loadingState = (state) => state.countries.loading;
export const errorState = (state) => state.countries.error;
export const successState = (state) => state.countries.success;
export const dataReceivedState = (state) => state.countries.countriesData;

export default countriesSlice.reducer;
