import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
// Configure the Redux store
const store = configureStore({
  // Add the cart reducer to the store
  reducer: {
    cart: cartReducer,
  },
});
export default store; // Export the store for use in the application
