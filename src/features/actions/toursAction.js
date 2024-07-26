import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const tourAction = createAsyncThunk(
  "api/v1/tour",

  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/tour", {
        withCredentials: true,
      });

      return data?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
