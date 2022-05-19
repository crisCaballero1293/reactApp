import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import axios from "axios";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get("./data.json").then((res) => setItem(res.data[2]));
    }, 3000);
    // eslint-disable-next-line
  }, []);
  console.log("item", item);

  return (
    <section>
      <ItemDetail item={item} />
    </section>
  );
}
