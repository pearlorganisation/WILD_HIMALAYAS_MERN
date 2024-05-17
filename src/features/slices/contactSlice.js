import { createSlice } from "@reduxjs/toolkit";
import { contactAction } from "../actions/contactAction";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  errorMessage: "",
  data: [],
};

const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      //  user signUp
      .addCase(contactAction.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(contactAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.data = action.payload;
        toast.success("Submit Successfully");
      })
      .addCase(contactAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default contactSlice.reducer;
