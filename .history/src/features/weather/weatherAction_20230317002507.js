import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk("getWeather/city", async(code) => {
try {
    await axios.get("")
}
})