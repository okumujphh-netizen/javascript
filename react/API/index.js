// fetching using useEffect
import { useState, useEffect } from "react";

function Car() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setCars(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Car Marketplace</h1>

      {cars.map(car => (
        <div key={car.id}>
          <h2>{car.title}</h2>
          <p>{car.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Car;


// uaing async and await
import { useState, useEffect } from "react";

function Car() {
  const [cars, setCars] = useState([]);

  useEffect(() => {

    async function fetchCars() {
      try {
        const response = await fetch(
          "https://api.sampleapis.com/cars/cars"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }

        const data = await response.json();

        setCars(data);

      } catch (error) {
        console.log(error);
      }
    }

    fetchCars();

  }, []);

  return (
    <div>
      <h1>Car Marketplace</h1>

      {cars.map(car => (
        <div key={car.id}>
          <h2>{car.car}</h2>
          <p>Model: {car.car_model}</p>
          <p>Year: {car.car_model_year}</p>
          <p>Price: {car.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Car;

// cleanup with external data
import { useState, useEffect } from "react";

function Car() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCars() {
      try {
        const response = await fetch(
          "https://api.sampleapis.com/cars/cars",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }

        const data = await response.json();
        setCars(data);

      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error);
        }
      }
    }

    fetchCars();

    return () => {
      controller.abort();
    };

  }, []);

  return (
    <div>
      <h1>Car Marketplace</h1>
      {cars.map(car => (
        <p key={car.id}>{car.car} {car.car_model}</p>
      ))}
    </div>
  );
}

export default Car;


// Concept	JavaScript / React tool
// Request external information	fetch()
// Wait for a response	async/await
// Convert JSON	response.json()
// Store returned data	useState()
// Fetch on component mount	useEffect()
// Display multiple records	.map()
// Search records	.filter()
// Handle loading	loading state 
// Handle errors	try/catch
// Cancel requests	AbortController