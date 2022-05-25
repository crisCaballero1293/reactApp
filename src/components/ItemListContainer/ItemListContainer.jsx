/* --------------------------------- IMPORTS -------------------------------- */
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../Data/Data.js"; //IMPORTAMOS EL ARRAY DE PRODUCTOS
import { useParams } from "react-router-dom";
/* -------------------------------------------------------------------------- */

export default function ItemListContainer({ gretting }) {
  const [productList, setProductList] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    /* ---------------------- DECLARAMOS UNA NUEVA PROMISE ---------------------- */
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products); //QUIERO QUE TOMES MI PROMESA LA RESUELVAS, Y QUE ME TRAIGAS PRODUCTS
        reject("Salio mal :("); //SI SE RECHAZA MI PROMESA MUESTRA LO QUE HAY EN LOS PARENTESIS
      }, 1500);
    });
    // getProducts.then((res) => console.log("respuesta", res)); //ENTONCES, DESPUÉS DE RESOLVER LA PROMESA EN EL PARAMETRO(RES) VAS A ALMACENAR EL RESULTADO PARA PODER VER QUE ME TRAJO MI PROMISE
    if (categoryId) {
      getProducts.then((res) => setProductList(res.filter((prod) => prod.category === categoryId)));
    } else {
      getProducts.then((res) => setProductList(res));
    }
    getProducts.catch((error) => console.log(error)); //SI DE LO ANTERIOR RESULTA UN ERROR, ATRAPALO EN EL PARAMETRO (ERROR)
    // eslint-disable-next-line
  }, [categoryId]);

  console.log("Lista de productos", productList);
  return (
    <main className="txtProvContainer">
      <p className="txtProvicional">{gretting}</p>
      <section>
        <ItemList productList={productList} />
      </section>
    </main>
  );
}
