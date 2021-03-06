/* -------------------------------- IMPORTS; -------------------------------- */
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBAr/NavBar";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart";
import Contacto from "./components/Contacto/Contacto";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* -------------------------------------------------------------------------- */
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Banner />
        <Routes>
          <Route path="/" element={<ItemListContainer gretting={"!! PRODUCTOS ¡¡"} />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer gretting={"!! HOLA MUNDO ¡¡"} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detailId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
