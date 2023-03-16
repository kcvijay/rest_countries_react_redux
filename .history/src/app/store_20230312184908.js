import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";

const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
});

export default store;
