import { getWeather } from "./weatherAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  weatherData: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
        state.success = true;
      });
  },
});

export default weatherSlice.reducer;
