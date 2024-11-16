import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModel';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = '40b7c60d';
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

  // Fetch popular movies
  useEffect(() => {
    fetchMovies('popular');
  }, []);

  const fetchMovies = async (query) => {
    const url = query === 'popular' ? `${API_URL}&s=batman` : `${API_URL}&s=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) setMovies(data.Search);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchMovies(term);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app-container">
      <Header />
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default App;
