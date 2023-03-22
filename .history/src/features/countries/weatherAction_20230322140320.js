import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk(
  "getWeather/city",
  async ({ city }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=645c2dc9bdf404bc19b5ee2818538af9`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
