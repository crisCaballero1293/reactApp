import React from "react";
import { Link } from "react-router-dom";

export default function Item({ prod }) {
  return (
    <div className="cardContainer">
      <Link to={`/detalle/${prod.id}`}>
        <img src={prod.img} alt={prod.name} />
      </Link>
      <h4 className="itemTitle">{prod.name}</h4>
    </div>
  );
}
