import React from "react";
import "./deleteButton.css";

const FavMovieCard = ({ movie, removeMovie }) => {
  return (
    <div>
      <img className="movies" src={movie.Poster} alt={movie.Title}></img>
      <button className="delete-button" onClick={() => removeMovie(movie)}>
        Remove from Favortie List
      </button>
    </div>
  );
};

export default FavMovieCard;
