/* --------------------------------- IMPORTS -------------------------------- */
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
/* -------------------------------------------------------------------------- */

export default function NavBar() {
  return (
    <header>
      <div className="container">
        <div className="containerLogo">
          <h2 className="logo">TECNOLOCOS</h2>
        </div>
        <nav className="mainNav">
          <ul className="listItems">
            <li>
              <NavLink to="/" className="link">
                INICIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria/1" className="link">
                SMARTPHONES
              </NavLink>
            </li>
            <li>
              <NavLink to="/categoria/2" className="link">
                GADGETS
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className="link">
                CONTÁCTO
              </NavLink>
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
