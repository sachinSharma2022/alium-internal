"use client"; // Required for client-side components

import { Provider } from "react-redux";
import store from "./store";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
