import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { products } from "../Data/Data.js";
import Item from "../Item/Item";

export default function ItemDetailContainer() {
  const [data, setData] = useState([]);
  const { detailId } = useParams();

  useEffect(() => {
    /* ------------- HACIENDO REQUEST O PETICIÓN, O (FETCH) CON LA LIBRERIA AXIOS ------------- */
    /* const getData = axios.get("./data.json");
    setTimeout(() => {
      getData.then((res) => setItem(res.find((item) => item.id === parseInt(detailID))));
    }, 2000); */
    /* -------------------------------------------------------------------------- */
    /* -------------- CREANDO PROMISE DESDE IMPORTAR ARRAY PRODUCTS ------------- */
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
        reject("Algo Salio Mal =(");
      }, 1500);
    });
    getData.then((res) => setData(res.find((prod) => prod.id === parseInt(detailId))));
    getData.catch((error) => console.log(error));
    /* -------------------------------------------------------------------------- */
    // eslint-disable-next-line
  }, []);
  console.log("data", data);

  return (
    <section className="detailSection">
      <ItemDetail data={data} />
    </section>
  );
}
