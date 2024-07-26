import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const activityAction = createAsyncThunk(
  "api/v1/activity",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/activity", payload, {
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
