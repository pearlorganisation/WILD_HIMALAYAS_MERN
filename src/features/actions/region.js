import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRegions = createAsyncThunk(
  "getAllRegions",

  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/region", {
        withCredentials: true,
      });

      return data?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

