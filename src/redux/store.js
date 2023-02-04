import { configureStore } from "@reduxjs/toolkit";
import cart from "./reducer/cartItems";

export default configureStore({
  reducer: {
    cartItems: cart,
  },
});
