import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// All countries


export const showAllCountries = createAsyncThunk(
  "countries/showOne",
  async () => {
    const response = await axios.get(`https://restcountries.com/v3.1/all`, {});
    return response.data;
  }
);
