import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const trekAction = createAsyncThunk(
  "/api/v1/trek",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/trek", {
        withCredentials: true,
      });
      return data?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
