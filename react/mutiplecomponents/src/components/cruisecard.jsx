function CruiseCard({ destination, price }) {
  return (
    <div>
      <h2>{destination}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

export default CruiseCard;