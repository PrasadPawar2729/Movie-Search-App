import React, { useEffect, useState } from 'react';

const MovieModal = ({ movie, onClose }) => {
  const [details, setDetails] = useState({});
  const API_KEY = '40b7c60d';
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${movie.imdbID}`);
      const data = await response.json();
      setDetails(data);
    };
    fetchMovieDetails();
  }, [movie]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '1rem',
          width: '80%',
          maxWidth: '600px',
          borderRadius: '10px',
        }}
      >
        <h2>{details.Title}</h2>
        <p>{details.Plot}</p>
        <p><strong>Genre:</strong> {details.Genre}</p>
        <p><strong>Ratings:</strong> {details.imdbRating}</p>
        <button onClick={onClose} style={{ marginTop: '1rem' }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;

