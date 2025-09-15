import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSlice";
import productReducer from "../feature/merchant/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});
