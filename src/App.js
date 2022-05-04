/* -------------------------------- IMPORTS; -------------------------------- */
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
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
