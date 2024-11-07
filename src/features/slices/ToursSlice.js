import { createSlice } from "@reduxjs/toolkit";
import { specificRegionTours, specificTour, tourAction } from "../actions/toursAction";

const initialState = {
  isLoading: false,
  errorMessage: "",
  data: [],
  activityTourData: [],
  regionTourData:[]
};

const toursSlice = createSlice({
  name: "tourSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
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
      })
      .addCase(specificTour.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })

      .addCase(specificTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.activityTourData = action.payload;
      })

      .addCase(specificTour.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(specificRegionTours.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })

      .addCase(specificRegionTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.regionTourData = action.payload;
      })

      .addCase(specificRegionTours.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const {} = toursSlice.actions;
export default toursSlice.reducer;
