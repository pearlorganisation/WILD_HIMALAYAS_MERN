import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { trekAction } from "../actions/trekAction";

const initialState = {
  isLoading: false,
  errorMessage: "",
  data: [],
};

const trekSlice = createSlice({
  name: "trekSlice",
  initialState,
  reducers: {
    clearAuth: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder

      //  user signUp
      .addCase(trekAction.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(trekAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.data = action.payload;
      })
      .addCase(trekAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const {} = trekSlice.actions;
export default trekSlice.reducer;
