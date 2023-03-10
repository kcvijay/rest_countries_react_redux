import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loading: false,
    countriesData: [],
    singleCountryData: [],
    error: false,
    success: false,
    message: "",
  },
  reducers: {},
});

export default countriesSlice.reducer;
