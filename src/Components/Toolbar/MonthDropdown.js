import React from 'react';
const MonthDropdown = ({ currentDate, setCurrentDate }) => {
  const handleChange = (e) => {
    const newMonth = parseInt(e.target.value);
    const newDate = new Date(currentDate);
    newDate.setMonth(newMonth);
    setCurrentDate(newDate);
  };

  return (
    <select
      className="form-select month-dropdown"
      value={currentDate.getMonth()}
      onChange={handleChange}
    >
      {Array.from({ length: 12 }, (_, i) => (
        <option key={i} value={i}>
          {new Date(0, i).toLocaleString('default', { month: 'long' })}
        </option>
      ))}
    </select>
  );
};
export default MonthDropdown;