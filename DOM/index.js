
const exploreButton = document.querySelector("#explore-button");
const message = document.querySelector("#message");
const inventory = document.querySelector("#inventory");

exploreButton.addEventListener("click", function () {
  message.textContent =
  "Explore our premium collection of vehicles in Kenya.";
    
  });

const cars = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "AMG GT",
    category: "Sports Car",
    price: 18500000
  },
  {
    id: 2,
    brand: "BMW",
    model: "M4 Competition",
    category: "Performance Coupe",
    price: 14500000
  },
  {
    id: 3,
    brand: "Range Rover",
    model: "Sport",
    category: "Luxury SUV",
    price: 22000000
  }
];


const carList = document.querySelector("#car-list");

function displayCars() {
  carList.innerHTML = "";

  cars.forEach(function (car) {
    const card = document.createElement("article");
    const name = document.createElement("h3");
    const category = document.createElement("p");
    const price = document.createElement("p");

    card.classList.add("car-card");

    name.textContent = `${car.brand} ${car.model}`;
    category.textContent = car.category;

    price.textContent = new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      maximumFractionDigits: 0
    }).format(car.price);

    card.appendChild(name);
    card.appendChild(category);
    card.appendChild(price);

    carList.appendChild(card);
  });
}

displayCars();
