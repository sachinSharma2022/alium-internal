import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Auth slice we'll create

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
