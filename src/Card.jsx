function Card(props) {
  return (
    <div className="card">
      <p>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</p>
      <img
        className="cardImage"
        src={props.image}
        alt={`Image of ${props.name}`}
      ></img>
    </div>
  );
}
export default Card;
