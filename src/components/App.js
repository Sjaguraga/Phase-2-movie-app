import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MovieList from "./MovieList";
import FavoriteMovies from "./FavoriteMovies";
import AddMovie from "./AddMovie";
import "../index.css";

const url = 'http://localhost:3000/Movies';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("marvel");

  const getMovieRequest = async (searchTerm) => {
    
    const response = await fetch(url);
    const responseJson = await response.json();
    // console.log(responseJson);
    setMovies(responseJson);
  };

  useEffect(() => {
    getMovieRequest(searchTerm);
  }, [searchTerm]);

  function addFavoriteMovies(movieObj) {
    if (favorites.includes(movieObj) === false) {
      setFavorites([...favorites, movieObj]);
    }
  }

  function handleNewMovie(movie) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then((json) => {
        setMovies([...movies, json]);
      })
      .catch((err) => console.error(err));
  }

  function removeMovie(removeItem) {
    console.log(removeItem);
    setFavorites(favorites.filter((el) => el.imdbID !== removeItem.imdbID));
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/favoritemovies">
          <FavoriteMovies favorites={favorites} removeMovie={removeMovie} />
        </Route>
        <Route path="/movielist">
          <MovieList
            movies={movies}
            addFavoriteMovies={addFavoriteMovies}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/AddMovie">
          <AddMovie handleNewMovie={handleNewMovie} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
