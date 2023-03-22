import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk(
  "getWeather/city",
  async (city, id) => {
    const response =
      // await axios.get`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`;
    return response.data;
  }
);
