import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";
import weatherReducer from "../features/weather/weatherSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
    weather: weatherReducer,
  },
});
