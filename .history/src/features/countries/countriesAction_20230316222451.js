import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// All countries

const BASE_URL = "https://restcountries.com/v3.1/all";

export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
