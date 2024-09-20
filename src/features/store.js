import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./slices/authSlice";
import TrekSlice from "./slices/trekSlice";
import activitySlice from "./slices/activitySlice";
import ToursSlice from "./slices/ToursSlice";
import contactSlice from "./slices/contactSlice";
import booking from "./slices/booking";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import productSlice from "./slices/productSlice";
import cart from "./slices/Cart";


const reducers = combineReducers({
  auth: authReducer,
  trek: TrekSlice,
  activity: activitySlice,
  tour: ToursSlice,
  contact: contactSlice,
  booking,
  product: productSlice,
  cart
});


const persistConfig = {
  key: 'WildHimalayasClient',
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        console.log('Redux Persist Encryption Failed: ', err);
      },
    }),
  ],
  // if you do not want to persist this part of the state
  // blacklist: ["omitedPart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_WORKING_ENVIRONMENT !== "production",
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
