import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";
import countryReducer from "../features/countries/countrySlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
  },
});
