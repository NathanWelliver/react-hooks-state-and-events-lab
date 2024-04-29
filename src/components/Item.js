import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, itemInCart] = useState(false)

  const prdctInCart = inCart ? "in-cart" : "";

  function handleClick(){
    itemInCart((inCart) => !inCart)
  }

  return (
    <li className={prdctInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
