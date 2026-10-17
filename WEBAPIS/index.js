//DOM API
const heading = document.querySelector("h1");
heading.textContent = "Hello, World!";

//TIMERS API
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

//FETCH API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.error(error));

//EVENTS API
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button clicked!");
});

//WEB STORAGE API
localStorage.setItem("username", "John");

const username = localStorage.getItem("username");
console.log(username);

//GEOLOCATION API
navigator.geolocation.getCurrentPosition(
    position => console.log(position.coords.latitude),
    error => console.log(error.message)
);