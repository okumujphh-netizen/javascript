// basic structure
// GET-retrieve data
fetch("API_URL")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

  // Real example
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

  // using aync and await
  async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();

// ADD -means creating a new record
// done using post

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John",
    email: "john@gmail.com"
  })
})
.then(response => response.json())
.then(data => console.log(data));

// DELETE - Requests remove an existing record

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE"
})
.then(response => {
  console.log("User deleted");
});




