/* --------------------------------- IMPORTS -------------------------------- */
import React, { useState } from "react";
/* -------------------------------------------------------------------------- */
export default function ItemCount() {
  const [counter, setCounter] = useState(1);
  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <section className="oneSection">
      <div className="mainContainer">
        <div className="cardContainer">
          <img src="" alt="img producto" />
          <h4 className="itemTitle">Lorem, ipsum dolor.</h4>
          <div className="buttonsCountContainer">
            <button onClick={restar} className="reduceButton">
              -
            </button>
            <span>{counter}</span>
            <button onClick={sumar} className="increaseButton">
              +
            </button>
          </div>
          <div className="buttonAddCartContainer">
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </section>
  );
}
