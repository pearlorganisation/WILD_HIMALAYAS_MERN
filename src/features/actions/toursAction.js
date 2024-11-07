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

export const specificTour = createAsyncThunk(
  "api/v1/tour/specific",

  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/tour/${payload?.id}`, {
        withCredentials: true,
      });

      return data?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const specificRegionTours = createAsyncThunk(
  "api/v1/tour/region",

  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/tour/region/${payload?.id}`, {
        withCredentials: true,
      });

      return data?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
