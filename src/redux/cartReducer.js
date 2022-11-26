import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      // its means its already  exists in the cart
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id != action.payload
      );
    },
    resetCart: (state, action) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
