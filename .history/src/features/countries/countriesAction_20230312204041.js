import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// All countries

export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async (thunkAPI) => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      return console.log(response.data);
    } catch (err) {
      const message = (err.response && err.response.data) || err.message;

      // Reject with value sends the error message as payload.
      return thunkAPI.rejectWithValue(message);
    }
  }
);