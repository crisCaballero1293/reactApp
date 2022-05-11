import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({ prod }) {
  return (
    <div className="cardContainer">
      <img src={prod.img} alt={prod.name} />
      <h4 className="itemTitle">{prod.name}</h4>
      <ItemCount stock={prod.stock} />
      <div className="buttonAddCartContainer">
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}
