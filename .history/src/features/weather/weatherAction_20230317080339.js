import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk(
  "getWeather/city",
  async (city, ID) => {
    try {
      await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ID}`
      );
    } catch (err) {
      alert("The page has encountered a problem. " + err.message);
    }
  }
);
