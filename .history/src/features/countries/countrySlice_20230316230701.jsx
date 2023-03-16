import { createSlice } from "@reduxjs/toolkit";
import { showSingleCountry } from "./countryAction";

const initialState = {
  loading: true,
  countriesData: [],
  singleCountryData: [],
  error: null,
  success: false,
};
