import { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      title,
      genre,
      year
    });
  }

  return (
    <div>
      <h1>Add a Movie</h1>

      <form onSubmit={handleSubmit}>

        <label>Movie Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />

        <label>Release Year:</label>
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />

        <button type="submit">Add Movie</button>

      </form>
    </div>
  );
}

export default App;