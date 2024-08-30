import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const productAction = createAsyncThunk(
  "api/v1/product",

  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/product", {
        withCredentials: true,
      });

      return data?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
