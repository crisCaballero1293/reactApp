/* -------------------------------- IMPORTS; -------------------------------- */
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBAr/NavBar";
/* -------------------------------------------------------------------------- */
function App() {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <ItemListContainer gretting={"!! HOLA MUNDO ¡¡"} />
    </>
  );
}

export default App;
