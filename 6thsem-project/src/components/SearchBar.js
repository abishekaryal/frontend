
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // In a real app, you'd trigger a search here
    console.log('Searching for:', query);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for notes, subjects, or tags"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
