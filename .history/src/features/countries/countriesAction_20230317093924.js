import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// All countries

export const showAllCountries = createAsyncThunk(
  "countries/showOne",
  async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`, {
        headers: { "Access-Control-Allow-Origin": true },
      });
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }
);
