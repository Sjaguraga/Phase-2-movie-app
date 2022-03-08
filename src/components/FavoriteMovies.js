import React from "react";
import Movies from "./Movies";
import { v4 as uuid } from "uuid";

const FavoriteMovies = ({ favorites, setFavoriteMovies }) => {
  return (
    <div className="image-container d-flex justify-content-start m-3">
      {favorites.map((movie) => {
        return (
          <Movies
            key={uuid()}
            movie={movie}
            setFavoriteMovies={setFavoriteMovies}
          />
        );
      })}
    </div>
  );
};

export default FavoriteMovies;
