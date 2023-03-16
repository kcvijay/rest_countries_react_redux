import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// All countries

export const showAllCountries = createAsyncThunk("countries/showAll", () => {
  return axios
    .get("https://www.restcountries.com/v3.1/all")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
});