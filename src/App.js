import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Favorites from "./components/Favorites";
import './App.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const searchMovies = async (query) => {
    if (!query) return;
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      if (res.data.Search) setMovies(res.data.Search);
      else setMovies([]);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const addFavorite = (movie) => {
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="App">
      <h1>🎬 Movie Search App</h1>
      <SearchBar onSearch={searchMovies} />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onFavorite={addFavorite} />
        ))}
      </div>
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
