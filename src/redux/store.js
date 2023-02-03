import { configureStore } from "@reduxjs/toolkit";
import cart from "./reducer/counterSliceCart";

export default configureStore({
  reducer: {
    counterCart: cart,
  },
});
