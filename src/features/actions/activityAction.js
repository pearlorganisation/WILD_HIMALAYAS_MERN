import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const activityAction = createAsyncThunk(
  "auth/activity",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/auth/activity", payload, {
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
