import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MovieList from "./MovieList";
import FavoriteMovies from "./FavoriteMovies";
import AddMovie from "./AddMovie";
import "../index.css";

const url = "http://localhost:3000/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("marvel");

  const getMovieRequest = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=6e4caee6`
    );
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search);
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
        setFavorites([...favorites, json]);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setFavorites(data));
  }, []);

  function removeMovie(removeItem) {
    console.log(removeItem);
    setFavorites(favorites.filter((el) => el.Poster !== removeItem.Poster));
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
