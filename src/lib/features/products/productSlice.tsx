import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";
const initialState: Product[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
