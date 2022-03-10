import React from "react";

const FavMovieCard = ({ movie, removeMovie }) => {
  return (
    <div>
      <img src={movie.Poster} alt={movie.Title}></img>
      <button className="delete-button" onClick={() => removeMovie(movie)}>
        Remove from Favortie List
      </button>
    </div>
  );
};

export default FavMovieCard;
