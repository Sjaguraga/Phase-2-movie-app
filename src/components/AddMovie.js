import React from "react";

const AddMovie = ({ handleNewMovie }) => {

  function handleSubmitMovieForm(event) {
    event.preventDefault();
    const addMovie = event.target['add-movie'].value
    
    const newMovie = {
      Poster: addMovie,
    }

    handleNewMovie(newMovie)
    event.target.reset();
  }

  return (
    <div className="input">
      <form onSubmit={handleSubmitMovieForm}>
        <input id="add-movie" className="searchTerm" placeholder="type in new movie..."></input>
        <button className="searchButton">add</button>
      </form>
    </div>
  );
};

export default AddMovie;
