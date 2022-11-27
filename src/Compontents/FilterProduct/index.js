import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_filter } from "../../redux/filterReducer";

const FilterProduct = () => {
  const filters = useSelector(
    (state) => state.filters.price,
    state.filters.MaxPrice
  );
  const dispatch = useDispatch();

  const UpdateFilterValue = () => {
    dispatch(load_filter(filters.price));
  };

  return (
    <>
      <div>
        <h1>{filters.price}</h1>
        <input
          type="range"
          name="price"
          min={filters.price}
          max={filters.MaxPrice}
          value={filters.price}
          onChange={UpdateFilterValue}
        />
      </div>
    </>
  );
};

export default FilterProduct;
