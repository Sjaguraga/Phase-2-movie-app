import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MovieList from "./MovieList";
import FavoriteMovies from "./FavoriteMovies";
import "../index.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("spider man");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=6e4caee6`;
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchTerm]);

  function addFavoriteMovies(movieObj) {
    if (favorites.includes(movieObj) === false) {
      setFavorites([...favorites, movieObj]);
    }
  }
  function handleAddMovie(newMovie) {
    const updatedMovieArray = [...movies, newMovie];
    setSearchTerm(updatedMovieArray);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/favoritemovies">
          <FavoriteMovies
            favorites={favorites}
            addFavoriteMovies={addFavoriteMovies}
          />
        </Route>
        <Route path="/movielist">
          <MovieList
            movies={movies}
            addFavoriteMovies={addFavoriteMovies}
            handleAddMovie={handleAddMovie}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
