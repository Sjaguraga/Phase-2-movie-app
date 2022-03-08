import React, { useState } from "react";
import Movies from "./Movies";
import { v4 as uuid } from "uuid";

const MovieList = ({
  movies,
  addFavoriteMovies,
  handleAddMovie,
  setSearchTerm,
  searchTerm,
}) => {
  const [image, setImage] = useState("");
  const [input, setInput] = useState("");

  function clickHandler() {
    setSearchTerm(input);
  }

  return (
    <div>
      <input
        onChange={(event) => setInput(event.target.value)}
        className="search"
        placeholder="type to search movies..."
      ></input>
      <button onClick={clickHandler} type="submit">
        Submit
      </button>
      <form>
        <input
          type="text"
          name="image"
          placeholder="add a new movie..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
      <div className="image-container d-flex justify-content-start m-3">
        {movies.map((movie) => {
          return (
            <Movies
              key={uuid()}
              movie={movie}
              addFavoriteMovies={addFavoriteMovies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
