import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
        aria-label="Search for a movie" 
        style={{
          padding: '0.8rem',
          width: '80%',
          maxWidth: '500px',
          border: '2px solid #ddd',
          borderRadius: '25px',
          fontSize: '1rem',
          outline: 'none',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          margin: '1rem auto',
          display: 'block',
          color: '#333',
          backgroundColor: '#fff', 
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#4a90e2'; 
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#ddd'; 
        }}
      />
    </div>
  );
};

export default SearchBar;
