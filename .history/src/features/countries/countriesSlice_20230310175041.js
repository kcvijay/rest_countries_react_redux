import { createSlice } from "@reduxjs/toolkit";'


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
  initialState:initialState,
  reducers: {reset: (state) => {
    state.loading =  false;
    state.success = false;

  }},
});

export default countriesSlice.reducer;
