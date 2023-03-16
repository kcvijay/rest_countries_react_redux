import { getWeather } from "./weatherAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  weatherData: [],
  error: null,
  success: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});
