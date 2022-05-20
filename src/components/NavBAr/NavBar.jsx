/* --------------------------------- IMPORTS -------------------------------- */
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
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
            <li>
              <NavLink to="/">INICIO</NavLink>
            </li>
            <li>
              <NavLink to="/categoria1">CATEGORIA 1</NavLink>
            </li>
            <li>
              <NavLink to="/categoria2">CATEGORIA 2</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">CONTÁCTO</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <CartWidget />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
