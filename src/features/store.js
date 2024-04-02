import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./slices/authSlice";

const reducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "WildHimalayasClient",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_WORKING_ENVIRONMENT !== "production",
});

export default store;
