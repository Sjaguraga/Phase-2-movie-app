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
  const [page, setPage] = useState("/");

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=spider man&apikey=6e4caee6";
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  function addFavoriteMovies(movieObj) {
    if (favorites.includes(movieObj) === false) {
      setFavorites([...favorites, movieObj]);
    }
  }

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route path="/favoritemovies">
          <FavoriteMovies
            favorites={favorites}
            addFavoriteMovies={addFavoriteMovies}
          />
        </Route>
        <Route path="/movielist">
          <MovieList movies={movies} addFavoriteMovies={addFavoriteMovies} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
