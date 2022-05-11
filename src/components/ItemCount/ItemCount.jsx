/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from "react";
/* -------------------------------------------------------------------------- */
export default function ItemCount({ stock }) {
  const [counter, setCounter] = useState(1);
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="buttonsCountContainer">
      <button onClick={restar} className="reduceButton">
        -
      </button>
      <span>{counter}</span>
      <button onClick={sumar} className="increaseButton">
        +
      </button>
    </div>
  );
}
