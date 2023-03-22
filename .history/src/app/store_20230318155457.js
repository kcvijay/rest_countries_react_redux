import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";
import countryReducer from "../features/countries/countriesSlice";
import weatherReducer from "../features/weather/countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
    weather: weatherReducer,
  },
});
