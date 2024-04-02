import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isError: "",
  authData: {
    name: "Abhishek",
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    clearAuth: (state, action) => {},
  },
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
