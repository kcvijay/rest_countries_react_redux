import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// For single country

const BASE_URL = `https://restcountries.com/v3.1/alpha/${code}`;

export const showSingleCountry = createAsyncThunk(
  "countries/showAll",
  async (code) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
