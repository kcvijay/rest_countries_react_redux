import { createSlice } from "@reduxjs/toolkit";
import { allCountries } from "./countriesAction";

const initialState = {
  loading: false,
  countriesData: [],
  singleCountryData: [],
  error: false,
  success: false,
  message: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },

    extraReducers: (builder) => {
      builder
        .addCase(allCountries.pending, (state) => {
          state.loading = true;
        })
        .addCase(allCountries.fulfilled, (state, action) => {
          state.loading = false;
          state.countriesData = action.payload;
          state.success = true;
        })
        .addCase(allCountries.rejected, (state, action) => {});
    },
  },
});

export default countriesSlice.reducer;
