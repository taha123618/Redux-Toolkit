import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <>
      <h1>Navbar</h1>
      <div>
        <h1>Cart({products.length})</h1>
      </div>
    </>
  );
};

export default Navbar;
