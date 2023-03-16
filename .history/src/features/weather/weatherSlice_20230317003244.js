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
});
