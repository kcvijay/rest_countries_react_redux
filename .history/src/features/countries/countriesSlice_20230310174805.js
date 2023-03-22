import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: { loading: false },
  reducers: {},
});

export default countriesSlice.reducer;
