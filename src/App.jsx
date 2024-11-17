import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModel';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = '40b7c60d';
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

  
  useEffect(() => {
    fetchMovies('popular');
  }, []);

  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); 

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Fetch movies whenever debouncedSearchTerm changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchMovies(debouncedSearchTerm);
    } else {
      fetchMovies('popular'); 
    }
  }, [debouncedSearchTerm]);

  // Fetch movies from the API
  const fetchMovies = async (query) => {
    const url = query === 'popular' ? `${API_URL}&s=batman` : `${API_URL}&s=${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]); 
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]); 
    }
  };

  
  const handleSearch = (term) => {
    setSearchTerm(term); 
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
