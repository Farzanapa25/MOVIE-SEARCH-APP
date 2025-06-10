import React from "react";

const MovieCard = ({ movie, onFavorite }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => onFavorite(movie)}>⭐ Add to Favorites</button>
    </div>
  );
};

export default MovieCard;
