// conditional rendering

function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

export default App;


// list rendering

function App() {
  const fruits = ["Apple", "Mango", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default App;

// lazy loading

import { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <About />
    </Suspense>
  );
}

export default App;


// memoization

import { memo } from "react";

const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
});

export default Greeting;