import { configureStore, createReducer } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";
import countryReducer from "../features/countries/countriesSlice";
import weatherReducer from "../features/countries/countriesSlice";
import cartReducer from "../features/countries/countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
    weather: weatherReducer,
    cart: cartReducer,
  },
});
