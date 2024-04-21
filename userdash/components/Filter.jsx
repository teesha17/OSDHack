import React, { useState } from "react";

const Filter = ({ data, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    const filteredData = data.filter(
      (item) => !selectedCategory || item.category === selectedCategory
    );
    onFilterChange(filteredData);
  };

  return (
    <div className="filter-section">
      <label htmlFor="category-filter">Category:</label>
      <select id="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All</option>
        {Array.from(new Set(data.map((item) => item.category))).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;