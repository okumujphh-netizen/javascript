
const exploreButton = document.getElementById("explore-button");
const message = document.getElementById("message");
const inventory = document.getElementById("inventory");
const carList = document.getElementById("car-list");
const inventoryIntro = document.getElementById("inventory-intro");

const navigationLinks = document.querySelectorAll("nav a");

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

// Display a message and scroll to the inventory.
exploreButton.addEventListener("click", function () {
    message.textContent =
        "Explore our premium collection of vehicles in Kenya.";

    inventory.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Handle navigation link clicks.
navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        message.textContent = `Navigating to ${link.textContent}.`;
    });
});

// Create a vehicle card.
function createCarCard(car) {
    const card = document.createElement("article");
    const name = document.createElement("h3");
    const category = document.createElement("p");
    const price = document.createElement("p");
    const removeButton = document.createElement("button");

    card.classList.add("car-card");
    card.setAttribute("data-car-id", car.id);

    name.textContent = `${car.brand} ${car.model}`;
    category.textContent = car.category;

    price.textContent = new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 0
    }).format(car.price);

    removeButton.textContent = "Remove from Collection";
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("aria-label", `Remove ${car.brand} ${car.model}`);

    removeButton.addEventListener("click", function () {
        card.remove();

        message.textContent =
            `${car.brand} ${car.model} has been removed from the display.`;
    });

    card.append(name, category, price, removeButton);

    return card;
}

// Display all vehicles.
function displayCars() {
    carList.replaceChildren();

    cars.forEach(function (car) {
        const card = createCarCard(car);
        carList.append(card);
    });

    inventoryIntro.textContent =
        `Explore our ${cars.length} featured vehicles.`;
}

displayCars();

