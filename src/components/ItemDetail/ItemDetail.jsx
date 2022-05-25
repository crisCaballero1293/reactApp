import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetail({ data }) {
  const [goToCart, setToCart] = useState(false);

  const onAdd = (quantity) => {
    setToCart(true);
  };

  return (
    <div className="itemDetailContainer">
      <div className="imgDetailContainer">
        <img src={data.img} alt={data.description} />
      </div>
      <div className="detailsContainer">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        {goToCart ? <Link to={"/cart"}>Terminar compra</Link> : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />}
      </div>
    </div>
  );
}
