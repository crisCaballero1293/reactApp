/* --------------------------------- IMPORTS -------------------------------- */
import CartWidget from "../CartWidget/CartWidget";
/* -------------------------------------------------------------------------- */

export default function NavBar() {
  return (
    <header>
      <div className="container">
        <div className="containerLogo">
          <p className="logo">LOGO</p>
        </div>
        <nav className="mainNav">
          <ul className="listItems">
            <li>INICIO</li>
            <li>PRODUCTOS</li>
            <li>CONTACTO</li>
            <CartWidget />
          </ul>
        </nav>
      </div>
    </header>
  );
}
