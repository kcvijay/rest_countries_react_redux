import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries } from "./countriesAction";

const initialState = {
  loading: false,
  countriesData: [],
  singleCountryData: [],
  error: null,
  success: false,
  message: "",
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
        state.message = "Getting countries data";
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.countriesData = action.payload;
        state.message = "Data received";
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.countriesData = [];
        state.message = "Error on data fetching.";
      });
  },
});

export default countriesSlice.reducer;
