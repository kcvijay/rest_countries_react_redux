import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// All countries

export const showAllCountries = createAsyncThunk(
  "countries/showOne",
  async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com`, {
        headers: { "Access-Control-Allow-Origin": true },
      });
      return response.data;
    } catch (err) {
      alert("The page has encountered a problem. " + err.message);
    }
  }
);
