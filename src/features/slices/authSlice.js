import { createSlice } from "@reduxjs/toolkit";
import {
  emailVerification,
  logOut,
  signIn,
  signUp,
} from "../actions/authActions";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
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
      })

      //user verification

      .addCase(emailVerification.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(emailVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.authData = action.payload;
        toast.success("Verification Successful");
      })
      .addCase(emailVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(`Uh-oh! ${action.payload}`);
      })

      //Logout

      .addCase(logOut.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        localStorage.clear();
        sessionStorage.clear();
        state.authData = action.payload;
        toast.success("Logout Successful");
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(`Uh-oh! ${action.payload}`);
      });
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
