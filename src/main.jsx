import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./features/store.js";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from "sonner";


let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <App />
        <Toaster position="top-right" richColors />
      </PersistGate>

    </Provider>
  </React.StrictMode>
);
