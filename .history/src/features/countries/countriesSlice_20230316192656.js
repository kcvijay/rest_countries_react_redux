import { createSlice } from "@reduxjs/toolkit";
// import { showAllCountries } from "./countriesAction";

export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async () => {
    const response = await axios.get("https://www.restcountries.com/v3.1/all");
    return response.data;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loading: false,
    countriesData: [],
    singleCountryData: [],
    error: false,
    success: false,
  },
  reducers: {},
  // reset: (state) => {
  //   state.loading = false;
  //   state.success = false;
  //   state.error = false;
  // },

  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.countriesData = [];
      });
  },
});

export default countriesSlice.reducer;
