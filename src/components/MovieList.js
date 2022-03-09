import React, { useState } from "react";
import Movies from "./Movies";
import { v4 as uuid } from "uuid";

const MovieList = ({ movies, addFavoriteMovies, setSearchTerm }) => {
  const [input, setInput] = useState("");

  function clickHandler() {
    setSearchTerm(input);
  }

  return (
    <div className="input">
      <div>
        <input
          onChange={(event) => setInput(event.target.value)}
          className="searchTerm"
          placeholder="type to search movies..."
        ></input>
        <button className="searchButton" onClick={clickHandler} type="click">
          ♥
        </button>
      </div>
      <div className="movies">
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
