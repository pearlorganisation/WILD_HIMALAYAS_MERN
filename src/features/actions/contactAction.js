import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const contactAction = createAsyncThunk(
  "api/v1/contactUs",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/contactUs", payload, {
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
