import { createSlice } from "@reduxjs/toolkit";
import { emailVerification, signIn, signUp } from "../actions/authActions";
import { toast } from "sonner";

const initialState = {
  isLoading: true,
  errorMessage: "",
  authData: null,
  emailVerified:false
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
        toast.success("Logged In Successfully ");
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
        state.emailVerified= false
      })
      .addCase(emailVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.authData = action.payload;
        state.emailVerified= true
        toast.success("Verification Successful");
      })
      .addCase(emailVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(`Uh-oh! ${action.payload}`);
        state.emailVerified= false
      });
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
