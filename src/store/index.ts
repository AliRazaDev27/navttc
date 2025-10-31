import { configureStore } from '@reduxjs/toolkit'
import CartReducer from "./features/cart/cartSlice";
export default configureStore({
  reducer: {cart:CartReducer}
})