import React from "react";
import Movies from "./Movies";
import { v4 as uuid } from "uuid";

const FavoriteMovies = ({ favorites, addFavoriteMovies }) => {
  return (
    <div className="image-container d-flex justify-content-start m-3">
      {favorites.map((movie) => {
        return (
          <Movies
            key={uuid()}
            movie={movie}
            addFavoriteMovies={addFavoriteMovies}
          />
        );
      })}
    </div>
  );
};

export default FavoriteMovies;
