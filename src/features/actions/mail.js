import { instance } from "@/services/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendOrderMail = createAsyncThunk(
  "api/v1/ordermail",
  async ({id,payload}, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/mail/sendOrderMail/${id}`, payload, {
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
