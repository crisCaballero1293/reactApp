/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from "react";
/* -------------------------------------------------------------------------- */
export default function ItemCount({ initial, stock, onAdd }) {
  const [counter, setCounter] = useState(initial);
  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div className="buttonsCountContainer">
        <button disabled={counter <= 1} onClick={restar} className="reduceButton">
          -
        </button>
        <span>{counter}</span>
        <button disabled={counter >= stock} onClick={sumar} className="increaseButton">
          +
        </button>
      </div>
      <div className="buttonAddCartContainer">
        <button disabled={stock <= 0} onClick={() => onAdd(counter)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
