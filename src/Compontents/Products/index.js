import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Products = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={dispatch(
          addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            price: data.attributes.price,
            img: data.attributes.img.data.attributes.url,
            quantity,
          })
        )}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Products;
