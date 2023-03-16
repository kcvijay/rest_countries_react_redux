import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// All countries

export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async (_, thunkAPI, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      return response.data;
    } catch (err) {
      const message = (err.response && err.response.data) || err.message;

      // Reject with value sends the error message as payload.
      return rejectWithValue(message);
    }
  }
);
