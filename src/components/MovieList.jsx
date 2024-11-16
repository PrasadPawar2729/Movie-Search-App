import React from 'react';

const MovieList = ({ movies, onMovieSelect }) => {
  return (
<div
  className="responsive-grid"
>
  {movies.map((movie) => (
  <div
  key={movie.imdbID}
  onClick={() => onMovieSelect(movie)}
  style={{
    border: '1px solid #333',
    borderRadius: '12px',
    padding: '1rem',
    background: '#1e1e1e',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.3)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
  }}
>
  <img
    src={movie.Poster}
    alt={movie.Title}
    style={{
      width: '100%',
      borderRadius: '8px',
      objectFit: 'cover',
      marginBottom: '1rem',
      maxHeight: '300px',
    }}
  />
  <h4
    style={{
      margin: '0.5rem 0 0.2rem',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#4a90e2',
    }}
  >
    {movie.Title}
  </h4>
  <p
    style={{
      margin: '0',
      fontSize: '1rem',
      color: '#aaa',
    }}
  >
    {movie.Year}
  </p>
</div>

  ))}
</div>

  );
};

export default MovieList;
