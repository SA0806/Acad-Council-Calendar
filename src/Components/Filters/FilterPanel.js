import React from 'react';
import './FilterPanel.css';

const FilterPanel = ({ filters, onToggle }) => (
  <div className="filters-panel ">
    <h5>FILTERS</h5>
    {Object.keys(filters).map((type) => (
      <div key={type} className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={filters[type]}
          onChange={() => onToggle(type)}
          id={`filter-${type}`}
        />
        <label className="form-check-label" htmlFor={`filter-${type}`}>
          {type}
        </label>
      </div>
    ))}
  </div>
);

export default FilterPanel;
