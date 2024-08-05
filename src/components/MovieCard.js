import React from 'react';
import './MovieCard.css'; // Import the CSS file

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
        <p className="movie-rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
