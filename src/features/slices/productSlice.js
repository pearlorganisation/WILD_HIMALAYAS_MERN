import { createSlice } from "@reduxjs/toolkit";
import { productAction } from "../actions/productAction";

const initialState = {
  isLoading: false,
  errorMessage: "",
  data: [],
};

const toursSlice = createSlice({
  name: "tourSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      //  user signUp

      .addCase(productAction.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })

      .addCase(productAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.data = action.payload;
      })

      .addCase(productAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const {} = toursSlice.actions;
export default toursSlice.reducer;
