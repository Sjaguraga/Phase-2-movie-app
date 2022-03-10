import React from "react";

function Movies({ movie, addFavoriteMovies, removeMovie }) {
  return (
    <div onClick={() => addFavoriteMovies(movie)}>
      <img src={movie.Poster} alt={movie.Title}></img>
    </div>
  );
}

export default Movies;
