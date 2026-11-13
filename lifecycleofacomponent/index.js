
// Mounting

import { useEffect } from "react";

function Car() {

  useEffect(() => {
    console.log("Car component mounted!");
  }, []);

  return <h1>My Toyota</h1>;
}

export default Car;




// Update

import { useState, useEffect } from "react";

function Car() {

  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    console.log("Car speed updated:", speed);
  }, [speed]);

  return (
    <div>
      <h1>Speed: {speed} km/h</h1>

      <button onClick={() => setSpeed(speed + 10)}>
        Accelerate
      </button>
    </div>
  );
}

export default Car;



// Unmounting


import { useEffect } from "react";

function Car() {

  useEffect(() => {

    console.log("Car is ready!");

    return () => {
      console.log("Car component removed!");
    };

  }, []);

  return <h1>Toyota</h1>;
}

export default Car;