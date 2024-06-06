import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../state/cartSlice";
import productsReducer from "../state/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
