import React, { useState } from 'react';
import MovieList from '../src/components/MovieList';
import Filter from '../src/components/Filter'; // Assuming you have a Filter component
import AddMovie from '../src/components/AddMovie'; // Import the AddMovie component

import './App.css'; // Import the CSS file for styling

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      rating: 9.2,
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      rating: 9.2,
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      rating: 9.0,
    },
    {
      title: '12 Angry Men',
      description: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
      rating: 9.0,
    },

  ]);


  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filter) => {
    const { title, rating } = filter;
    let filtered = movies;
    if (title) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      filtered = filtered.filter(movie =>
        movie.rating >= parseFloat(rating)
      );
    }
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Nettflux</h1>
      </header>
      <main>
        <Filter onFilter={handleFilter} /> {/* Filter component */}
        <div className="add-movie-section">
          <h2>Add Movie to Collection</h2>
          <AddMovie onAddMovie={handleAddMovie} /> {/* AddMovie component */}
        </div>
        <MovieList movies={filteredMovies} />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Nettflux</p>
      </footer>
    </div>
  );
};

export default App;