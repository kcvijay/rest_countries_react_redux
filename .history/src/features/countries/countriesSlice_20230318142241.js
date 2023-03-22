import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries } from "./countriesAction";
import { showSingleCountry } from "./countryAction";

const initialState = {
  loading: true,
  countriesData: [],
  countryData: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
      })

      .addCase(showSingleCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.countryData = action.payload;
      });
  },
});

export default countriesSlice.reducer;