// without a dependeny array
import { useState, useEffect } from "react";

function Car() {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    console.log("The car component rendered!");
  });

  return (
    <div>
      <h1>Car Dashboard</h1>
      <p>Speed: {speed} km/h</p>

      <button onClick={() => setSpeed(speed + 10)}>
        Accelerate
      </button>
    </div>
  );
}

export default Car;

// with an empty dependency array
import { useState, useEffect } from "react";

function Car() {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    console.log("Car dashboard initialized!");
  }, []);

  return (
    <div>
      <h1>Car Dashboard</h1>
      <p>Speed: {speed} km/h</p>

      <button onClick={() => setSpeed(speed + 10)}>
        Accelerate
      </button>
    </div>
  );
}

export default Car;

// with a dependency array
import { useState, useEffect } from "react";

function Car() {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    console.log(`Current speed: ${speed} km/h`);
  }, [speed]);

  return (
    <div>
      <h1>Car Dashboard</h1>

      <p>Speed: {speed} km/h</p>

      <button onClick={() => setSpeed(speed + 10)}>
        Accelerate
      </button>
    </div>
  );
}

export default Car;

// using mutiple dependencies
import { useState, useEffect } from "react";

function Car() {
  const [speed, setSpeed] = useState(0);
  const [fuel, setFuel] = useState(100);

  useEffect(() => {
    console.log("Car information updated");

    console.log("Speed:", speed);
    console.log("Fuel:", fuel);
  }, [speed, fuel]);

  return (
    <div>
      <h1>Car Dashboard</h1>

      <p>Speed: {speed} km/h</p>
      <p>Fuel: {fuel}%</p>

      <button onClick={() => setSpeed(s => s + 10)}>
        Accelerate
      </button>

      <button onClick={() => setFuel(f => f - 10)}>
        Consume Fuel
      </button>
    </div>
  );
}

export default Car;

// cleanup function
import { useState, useEffect } from "react";

function Car() {
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Monitoring car speed:", speed);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [speed]);

  return (
    <div>
      <h1>Car Dashboard</h1>
      <p>Speed: {speed} km/h</p>

      <button onClick={() => setSpeed(s => s + 10)}>
        Accelerate
      </button>
    </div>
  );
}

export default Car;