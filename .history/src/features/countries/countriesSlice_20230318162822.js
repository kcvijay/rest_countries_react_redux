import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "./weatherAction";
import { showAllCountries } from "./countriesAction";
import { showSingleCountry } from "./countryAction";

const initialState = {
  loading: false,
  success: false,
  countriesData: [],
  countryData: [],
  weatherData: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {},

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
      .addCase(showSingleCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(showSingleCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.countryData = action.payload;
        state.success = true;
      })
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
        state.success = true;
      });
  },
});

export const {} = countriesSlice.actions;

export default countriesSlice.reducer;
