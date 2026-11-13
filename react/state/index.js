// usestate()

import { useState } from "react";

function Car() {
  const [speed, setSpeed] = useState(0);

  return (
    <div>
      <h1>Car Dashboard</h1>
      <p>Speed: {speed} km/h</p>

      <button onClick={() => setSpeed(speed + 10)}>
        Accelerate
      </button>

      <button onClick={() => setSpeed(speed - 10)}>
        Brake
      </button>
    </div>
  );
}

export default Car;


// different ways of updating state
// direct update

const [speed, setSpeed] = useState(0);

setSpeed(100);

