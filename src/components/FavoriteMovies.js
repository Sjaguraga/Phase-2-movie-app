import React from "react";
import { v4 as uuid } from "uuid";
import FavMovieCard from "./FavMovieCard";

const FavoriteMovies = ({ favorites, removeMovie }) => {
  return (
    <div className="listofmovies">
      {favorites.map((movie) => {
        return (
          <FavMovieCard key={uuid()} movie={movie} removeMovie={removeMovie} />
        );
      })}
    </div>
  );
};

export default FavoriteMovies;
