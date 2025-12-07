import React, { useState } from "react";

const FilterBar = ({ category , onFilter}) => {
  const filterCategories = [...category, "All"]
  return (
    <div>
      <span>FilterBar</span>
      <select onChange={(e) => onFilter(e.target.value)}>
        {filterCategories.map((categories, index) => (
          <option key={index}>{categories}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
