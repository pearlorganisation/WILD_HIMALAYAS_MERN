import { createSlice } from "@reduxjs/toolkit";
import { sendOrderMail } from "../actions/mail";
import { toast } from "sonner";


const initialState = {
  isLoading: false,
  errorMessage: "",
  mailData: [],
};

const mail = createSlice({
  name: "mail",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(sendOrderMail.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(sendOrderMail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.mailData = action.payload;
        toast.success("Order Mail sent succesfully")
      })
      .addCase(sendOrderMail.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const {} = mail.actions;
export default mail.reducer;
