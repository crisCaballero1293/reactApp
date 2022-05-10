import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer({ gretting }) {
  return (
    <main className="txtProvContainer">
      <p className="txtProvicional">{gretting}</p>
      <ItemCount />
    </main>
  );
}
