// prevent default

import { useState } from "react";

function App() {

  const [movie, setMovie] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    alert(`You added ${movie}`);
  }

  return (
    <div>
      <h1>Add a Movie</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={movie}
          onChange={(event) => setMovie(event.target.value)}
          placeholder="Enter movie title"
        />

        <button type="submit">Add Movie</button>

      </form>
    </div>
  );
}

export default App;