// mounting
import { useEffect } from "react";

function Car() {

  useEffect(() => {
    console.log("Car dashboard started!");
  }, []);

  return (
    <div>
      <h1>Car Dashboard</h1>
      <p>Welcome, Driver!</p>
    </div>
  );
}

export default Car;

// cleanup

import { useEffect } from "react";

function Car() {

  useEffect(() => {

    const timer = setInterval(() => {
      console.log("Monitoring car engine...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Engine monitoring stopped!");
    };

  }, []);

  return (
    <div>
      <h1>Car Dashboard</h1>
      <p>Engine monitoring active.</p>
    </div>
  );
}

export default Car;

// running on mount and cleanup
import { useEffect } from "react";

function Car() {

  useEffect(() => {

    console.log("Car monitoring started!");

    const timer = setInterval(() => {
      console.log("Checking engine...");
    }, 2000);

    return () => {
      clearInterval(timer);
      console.log("Car monitoring stopped!");
    };

  }, []);

  return (
    <div>
      <h1>Car Dashboard</h1>
      <p>Engine monitoring is active.</p>
    </div>
  );
}

export default Car;