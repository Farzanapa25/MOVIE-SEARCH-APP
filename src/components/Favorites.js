import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites">
      <h2>❤️ Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="movie-list">
          {favorites.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
