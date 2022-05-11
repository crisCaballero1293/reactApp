import Item from "../Item/Item";

export default function ItemList({ productList }) {
  return (
    <div className="mainContainer">
      {productList.map((prod) => (
        <Item prod={prod} key={prod.id} />
      ))}
    </div>
  );
}
