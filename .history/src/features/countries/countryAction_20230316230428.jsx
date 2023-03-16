import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// For single country

const BASE_URL = `https://restcountries.com/v3.1/alpha/${code}`;
