import React from "react";
import Movies from "./Movies";
import { v4 as uuid } from "uuid";

const FavoriteMovies = ({ favorites, addFavoriteMovies, removeMovie }) => {
  return (
    <div onClick={() => removeMovie(favorites)} className="movies">
      <h1 className="listofmovies">List of Favorite Movies</h1>
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
