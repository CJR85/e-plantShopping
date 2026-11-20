import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item already exists
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name,
      );
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item in the cart and update its quantity
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the quantity of the existing item
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
