import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../actions/authActions";
import { toast } from "sonner";

const initialState = {
  isLoading: true,
  errorMessage: "",
  authData: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    clearAuth: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      //  user signUp
      .addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.authData = action.payload;
        toast.success("Verification email sent! 💌 Check inbox.");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(`Uh-oh! ${action.payload}`);
      })

      //user signIn

      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.authData = action.payload;
        toast.success("Verification email sent! 💌 Check inbox.");
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(`Uh-oh! ${action.payload}`);
      });
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
