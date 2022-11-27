import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter_products: [],
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    MaxPrice: 0,
    price: 0,
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    load_filter: (state, action) => {
      let priceArrange = state.filters.price(
        action.payload.map((currElement) => currElement.price)
      );
      if (priceArrange) {
        // 2 way
        let MaxPrice = Math.max(...priceArrange);
        // console.log(MaxPrice);
        return MaxPrice;
      } else {
        state.filters.MaxPrice;
      }

      //   find the max no in the array
      //   1 Way
      //   console.log(Math.max.apply(null, priceArrange));
    },
    clear_filter: (state, action) => {
      state.filters = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { load_filter, clear_filter } = filterSlice.actions;

export default filterSlice.reducer;
