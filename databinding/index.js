// one way data binding

const price = 500;

return <p>Price: KSh {price}</p>;

// two way data binding

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name is: {name}</p>
    </div>
  );
}