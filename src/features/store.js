import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./slices/authSlice";
import TrekSlice from "./slices/trekSlice";
import activitySlice from "./slices/activitySlice";
import ToursSlice from "./slices/ToursSlice";
import contactSlice from "./slices/contactSlice";
import productSlice from "./slices/productSlice";

const reducers = combineReducers({
  auth: authReducer,
  trek: TrekSlice,
  activity: activitySlice,
  tour: ToursSlice,
  contact: contactSlice,
  product: productSlice,
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
