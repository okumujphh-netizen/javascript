// creating props


function CruiseCard(props) {
  return (
    <div>
      <h2>{props.destination}</h2>
      <p>Price: ${props.price}</p>
    </div>
  );
}

export default CruiseCard;


// passing props from a parent component

import CruiseCard from "./CruiseCard";

function App() {
  return (
    <div>
      <CruiseCard
        destination="Caribbean"
        price={1800}
      />

      <CruiseCard
        destination="Indian Ocean"
        price={950}
      />
    </div>
  );
}

export default App;

// prop destructuring

function CruiseCard({ destination, price }) {
  return (
    <div>
      <h2>{destination}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

// passing different types of props

<CruiseCard
  destination="Caribbean"
  price={1800}
  available={true}
  features={["Swimming", "Dining", "Entertainment"]}
/>