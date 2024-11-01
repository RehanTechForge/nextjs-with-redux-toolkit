import { Product } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

interface cartItemsInterface {
  cartItem: Product[];
}

const initialState: cartItemsInterface = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingCartItemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingCartItemIndex >= 0) {
        state.cartItem[existingCartItemIndex].quantity += 1;
      } else {
        state.cartItem.push(action.payload);
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      const existingCartItemIndex = state.cartItem.findIndex(
        (item) => item.id === id
      );

      if (existingCartItemIndex >= 0) {
        if (newQuantity > 0) {
          // Update the quantity to the new specified amount
          state.cartItem[existingCartItemIndex].quantity = newQuantity;
        } else {
          // Remove the item if newQuantity is 0
          state.cartItem.splice(existingCartItemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, updateCartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
