// click event

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;


// using state

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}

export default App;


// handling input events

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <h2>Hello, {name}</h2>
    </div>
  );
}

export default App;

// passing arguments to event handlers

function App() {
  function greet(name) {
    alert(`Hello ${name}`);
  }

  return (
    <button onClick={() => greet("John")}>
      Greet
    </button>
  );
}

