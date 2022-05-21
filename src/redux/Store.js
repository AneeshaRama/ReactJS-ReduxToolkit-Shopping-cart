import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
