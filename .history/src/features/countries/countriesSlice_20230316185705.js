import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries } from "./countriesAction";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loading: true,
    countriesData: [],
    singleCountryData: [],
    error: false,
    success: false,
  },
  reducers: {},
  reset: (state) => {
    state.loading = false;
    state.success = false;
    state.error = false;
  },

  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.countriesData = [];
      });
  },
});

export default countriesSlice.reducer;
