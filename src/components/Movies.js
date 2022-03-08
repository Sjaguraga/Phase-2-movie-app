import React from "react";

function Movies({ movie, addFavoriteMovies }) {
  return (
    <div onClick={() => addFavoriteMovies(movie)}>
      <img src={movie.Poster} alt="name"></img>
    </div>
  );
}

export default Movies;
