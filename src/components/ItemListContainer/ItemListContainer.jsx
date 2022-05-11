import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer({ gretting }) {
  const products = [
    { id: 1, name: "Lorem ipsum dolor sit.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "https://picsum.photos/201", stock: 5 },
    { id: 2, name: "Lorem ipsum dolor sit.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "https://picsum.photos/202", stock: 15 },
    { id: 3, name: "Lorem ipsum dolor sit.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "https://picsum.photos/203", stock: 10 },
    { id: 4, name: "Lorem ipsum dolor sit.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "https://picsum.photos/204", stock: 8 },
    { id: 5, name: "Lorem ipsum dolor sit.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "https://picsum.photos/205", stock: 2 },
    { id: 6, name: "Lorem ipsum dolor sit.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", img: "https://picsum.photos/206", stock: 13 },
  ];

  const [productList, setProductList] = useState([]);

  /* ---------------------- DECLARAMOS UNA NUEVA PROMISE ---------------------- */
  const getProducts = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
      if (condition) {
        resolve(products); //QUIERO QUE TOMES MI PROMESA LA RESUELVAS, Y QUE ME TRAIGAS PRODUCTS
      } else {
        reject("Salio mal :("); //SI SE RECHAZA MI PROMESA MUESTRA LO QUE HAY EN LOS PARENTESIS
      }
    }, 3000);
  });

  useEffect(() => {
    // getProducts.then((res) => console.log("respuesta", res)); //ENTONCES, DESPUÉS DE RESOLVER LA PROMESA EN EL PARAMETRO(RES) VAS A ALMACENAR EL RESULTADO PARA PODER VER QUE ME TRAJO MI PROMISE
    getProducts.then((res) => setProductList(res));
    getProducts.catch((error) => console.log(error)); //SI DE LO ANTERIOR RESULTA UN ERROR, ATRAPALO EN EL PARAMETRO (ERROR)
    // eslint-disable-next-line
  }, []);
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
