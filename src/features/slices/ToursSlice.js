import { createSlice } from "@reduxjs/toolkit";
import { tourAction } from "../actions/toursAction";

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
      .addCase(tourAction.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(tourAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.data = action.payload;
      })
      .addCase(tourAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const {} = toursSlice.actions;
export default toursSlice.reducer;
