import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  errorMessage: "",
  bookingData: [],
  trekkersData:[]
};

const booking = createSlice({
  name: "booking",
  initialState,
  reducers: {
   storeTrekkers : (state,action) =>{
     state.trekkersData = action.payload
   }
  }
});
export const {storeTrekkers} = booking.actions;
export default booking.reducer;
