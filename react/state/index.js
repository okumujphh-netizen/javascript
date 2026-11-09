// creating a counter application

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
}

export default App;

// to input fields

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />

      <h2>Hello, {name}</h2>
    </div>
  );
}

export default App;


// different types of state

const [name, setName] = useState("John"); 
const [age, setAge] = useState(23);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [hobbies, setHobbies] = useState(["Coding", "Gaming"]);
const [user, setUser] = useState({ name: "John", age: 23 });