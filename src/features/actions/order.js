import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getParticularOrders = createAsyncThunk(
  "api/v1/getParticularOrders",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/order/${id}`, {
        withCredentials: true,
      });
      console.log("data::", data);
      return data?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getParticularBookings = createAsyncThunk(
  "api/v1/getParticularBookings",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/booking/${id}`, {
        withCredentials: true,
      });
      console.log("data::", data);
      return data?.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
