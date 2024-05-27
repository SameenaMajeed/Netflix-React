import React from 'react';

const MovieCard = ({ movie }) => {
    if (!movie) return null;

    return (
        <div className="movie-card">
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
            <img src={movie.Poster} alt={movie.Title} />
            <p>Director: {movie.Director}</p>
            <p>Year: {movie.Year}</p>
            <p>Genre: {movie.Genre}</p>
        </div>
    );
};

export default MovieCard;
