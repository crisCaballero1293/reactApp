import AddCartButton from "../AddCartButton/AddCartButton";

export default function ItemDetail({ item }) {
  return (
    <div className="itemDetailContainer">
      <div className="imgDetailContainer">
        <img src={item.img} alt={item.description} />
      </div>
      <div className="detailsContainer">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <AddCartButton />
      </div>
    </div>
  );
}
