import React from "react";
import Movies from "./Movies";
import { v4 as uuid } from "uuid";

const MovieList = ({ movies, addFavoriteMovies }) => {
  return (
    <div>
      <input
        className="form-control"
        placeholder="type to search movies..."
      ></input>{" "}
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
