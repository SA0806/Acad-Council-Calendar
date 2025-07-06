import React from 'react';
const YearDropdown = ({ currentDate, setCurrentDate }) => {
  const handleChange = (e) => {
    const newYear = parseInt(e.target.value);
    const newDate = new Date(currentDate);
    newDate.setFullYear(newYear);
    setCurrentDate(newDate);
  };

  return (
    <select
      className="form-select year-dropdown"
      value={currentDate.getFullYear()}
      onChange={handleChange}
    >
      {[2024, 2025, 2026].map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  );
};
export default YearDropdown;