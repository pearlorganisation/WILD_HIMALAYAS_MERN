import { createSlice } from "@reduxjs/toolkit";
import { tourAction } from "../actions/toursAction";

const initialState = {
  isLoading: false,
  errorMessage: "",
  data: [],
};

const activitySlice = createSlice({
  name: "TourSlice",
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
export const {} = activitySlice.actions;
export default activitySlice.reducer;
