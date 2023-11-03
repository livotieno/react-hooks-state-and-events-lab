import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart(!inCart);
  };
  return (
    // conditional rendering
    <li className={`${inCart ? "in-cart" : null}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
