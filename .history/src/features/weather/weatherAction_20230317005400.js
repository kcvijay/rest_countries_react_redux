import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk("getWeather/city", async (code) => {
  try {
    await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${code}&appid=${process.env.REACT_APP_APP_ID}`,
      { headers: { "Access-Control-Allow-Origin": true } }
    );
  } catch (err) {
    alert(err.message);
  }
});
