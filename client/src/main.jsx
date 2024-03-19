import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Loader from "./components/loader/Loader"
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
