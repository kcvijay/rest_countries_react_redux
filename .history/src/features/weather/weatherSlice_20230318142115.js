import { getWeather } from "./weatherAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  weatherData: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.weatherData = action.payload;
    });
  },
});

export default weatherSlice.reducer;
