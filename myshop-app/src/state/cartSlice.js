import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  // Slice name
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemID = action.payload;
      const existingItem = state.items.find((product) => product.id === itemID);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((product) => product.id !== itemID);
        }
      }
    },
  },
});

// To dispatch actions in the reducer
export const { addToCart, removeFromCart } = cartSlice.actions;
// Destructuring so we can rename the reducer
const { reducer: cartReducer } = cartSlice;
export default cartReducer;
