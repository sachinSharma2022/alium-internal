// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default localStorage for web
import authReducer from "./authSlice"; // Import your slice

// Redux persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // List of reducers to persist (in this case, "auth")
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer, // Persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state check for redux-persist
    }),
});

export const persistor = persistStore(store); // Export persistor

export default store;
