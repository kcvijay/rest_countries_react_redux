import { createSlice } from "@reduxjs/toolkit";
// import { showAllCountries } from "./countriesAction";

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response?.data;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loading: false,
    countriesData: [],
    singleCountryData: [],
    error: null,
    success: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.countriesData = action.payload;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.countriesData = [];
      });
  },
});

export default countriesSlice.reducer;
