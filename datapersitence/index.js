// local storage


// Save data
localStorage.setItem("username", "John");

// Retrieve data
let user = localStorage.getItem("username");

console.log(user); // John

// Remove data
localStorage.removeItem("username");


// session storage

// Save data
sessionStorage.setItem("username", "John");

// Retrieve data
let user = sessionStorage.getItem("username");

console.log(user);

// cookies
document.cookie = "username=John";

// databases
