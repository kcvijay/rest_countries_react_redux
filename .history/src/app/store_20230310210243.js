import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";

export default const store =  configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
