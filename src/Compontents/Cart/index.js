import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  // For Sub Total
  const Total = () => {
    const total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return Total.toFixed(2);
  };

  return (
    <>
      {products.map((product, index) => {
        <div key={index}>
          <h1>{product.name}</h1>
          <h1>{product.title}</h1>
          <h1>{product.desc?.substring(0, 100)}</h1>
          <h1>
            {product.quantity} X ${product.price}
          </h1>
        </div>;
      })}

      <button>
        subTotal <span>{Total()}</span>
        <button onClick={dispatch(removeCart(data.id))}>Delete</button>
        <button onClick={dispatch(resetCart())}>Reset Cart</button>
      </button>
    </>
  );
};

export default Cart;
