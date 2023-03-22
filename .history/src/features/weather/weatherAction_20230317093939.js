import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk("getWeather/city", async (city) => {
  try {
    await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APP_ID}}`
    );
  } catch (err) {
    console.log(err.message);
  }
});
