import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/auth/signup", payload, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/auth/login", payload, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
