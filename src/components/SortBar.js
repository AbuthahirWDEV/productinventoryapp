import React from "react";

const SortBar = ({ onSort }) => {
  const sortCategory = [
    "None",
    "Low to High",
    "High to Low",
    "A → Z",
    "Z → A",
  ];
  return (
    <div>
      <label>Sort</label>
      <select onChange={(e) => onSort(e.target.value)}>
        {sortCategory.map((s, index) => (
          <option key={index}>{s}</option>
        ))}
      </select>
    </div>
  );
};

export default SortBar;
