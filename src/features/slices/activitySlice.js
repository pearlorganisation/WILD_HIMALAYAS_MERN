import { createSlice } from "@reduxjs/toolkit";
import { activityAction } from "../actions/activityAction";

const initialState = {
  isLoading: false,
  errorMessage: "",
  data: [],
};

const activitySlice = createSlice({
  name: "activitySlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      //  user signUp
      .addCase(activityAction.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(activityAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.data = action.payload;
      })
      .addCase(activityAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const {} = activitySlice.actions;
export default activitySlice.reducer;
