import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <label>👀SearchBar...</label>
      <input
        type="text"
        placeholder="Search Products..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
