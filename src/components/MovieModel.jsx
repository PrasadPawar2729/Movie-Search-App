import React, { useEffect, useState } from 'react';

const MovieModal = ({ movie, onClose }) => {
  const [details, setDetails] = useState({});
  const API_KEY = '40b7c60d';
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

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
       <h2 style={{ color: '#333', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
  {details.Title}
</h2>
<p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.5', marginBottom: '1rem' }}>
  {details.Plot}
</p>
<p style={{ color: '#444', fontSize: '1rem', marginBottom: '0.5rem' }}>
  <strong style={{ color: '#333', fontWeight: 'bold' }}>Genre:</strong> {details.Genre}
</p>
<p style={{ color: '#444', fontSize: '1rem', marginBottom: '0.5rem' }}>
  <strong style={{ color: '#333', fontWeight: 'bold' }}>Ratings:</strong> {details.imdbRating}
</p>
<button
  onClick={onClose}
  style={{
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#4a90e2',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = '#357ABD')}
  onMouseOut={(e) => (e.target.style.backgroundColor = '#4a90e2')}
>
  Close
</button>

      </div>
    </div>
  );
};

export default MovieModal;

