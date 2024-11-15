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
        style={{ padding: '0.5rem', width: '80%', maxWidth: '500px' }}
      />
    </div>
  );
};

export default SearchBar;
