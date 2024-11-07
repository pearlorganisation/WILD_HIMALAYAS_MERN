import { createSlice } from "@reduxjs/toolkit";
import { specificTour, tourAction } from "../actions/toursAction";
import { getAllRegions } from "../actions/region";

const initialState = {
  isLoading: false,
  errorMessage: "",
  regionData: [],
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllRegions.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })

      .addCase(getAllRegions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.regionData = action.payload;
      })

      .addCase(getAllRegions.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
  },
});
export const {} = regionSlice.actions;
export default regionSlice.reducer;
