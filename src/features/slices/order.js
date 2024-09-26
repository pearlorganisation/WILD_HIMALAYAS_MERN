import { createSlice } from "@reduxjs/toolkit";
import { getParticularBookings, getParticularOrders } from "../actions/order";


const initialState = {
  isLoading: false,
  errorMessage: "",
  orderData: [],
  bookingData:[]
};

const order = createSlice({
  name: "order",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getParticularOrders.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getParticularOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.orderData = action.payload;
  
      })
      .addCase(getParticularOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(getParticularBookings.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getParticularBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.bookingData = action.payload;
  
      })
      .addCase(getParticularBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const {} = order.actions;
export default order.reducer;
