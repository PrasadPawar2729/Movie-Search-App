import React from 'react';

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    padding: '1rem',
  }}
>
  {movies.map((movie) => (
    <div
      key={movie.imdbID}
      onClick={() => onMovieSelect(movie)}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '0.5rem',
        background: '#fff',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        textAlign: 'center',
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          width: '100%',
          borderRadius: '4px',
          objectFit: 'cover',
        }}
      />
      <h4 style={{ margin: '0.5rem 0 0.2rem', fontSize: '1rem' }}>
        {movie.Title}
      </h4>
      <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>
        {movie.Year}
      </p>
    </div>
  ))}
</div>

  );
};

export default MovieList;
