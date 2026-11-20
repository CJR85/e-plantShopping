import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
    numberOfItems: 0, // Initialize numberOfItems as 0
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

      state.numberOfItems += 1; // Increment the number of items in the cart
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name,
      );
      state.numberOfItems -= 1; // Decrement the number of items in the cart
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item in the cart and update its quantity
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        state.numberOfItems -= itemToUpdate.quantity; // Decrement the number of items in the cart
        itemToUpdate.quantity = quantity; // Update the quantity of the existing item
        state.numberOfItems += quantity; // Increment the number of items in the cart
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
