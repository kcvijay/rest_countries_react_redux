import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk("getWeather/city", async (city) => {
  try {
    await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_APP_ID}`,
      { headers: { "Access-Control-Allow-Origin": true } }
    );
  } catch (err) {
    alert("The page has encountered a problem. " + err.message);
  }
});
