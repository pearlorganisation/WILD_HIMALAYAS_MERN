import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const tourAction = createAsyncThunk(
  "api/v1/overview",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/overview", {
        withCredentials: true,
      });
      return data?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
