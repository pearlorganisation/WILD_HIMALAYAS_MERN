import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/auth/signup", payload, {
        withCredentials: true,
      });
      console.log("data::", data);
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

export const emailVerification = createAsyncThunk(
  "emailVerification",
  async ({ token }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(
        `mail/verifySignupOtp/${token}`,

        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/auth/logout", payload, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
