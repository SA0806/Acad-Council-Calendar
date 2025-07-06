import React from 'react';
const PrevButton = ({ currentDate, setCurrentDate }) => {
  const goToPrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  return (
    // <button className="btn btn-outline-secondary toolbar-button" onClick={goToPrevMonth}>
    //   ◀️
    // </button>
    <button className="btn btn-light Prevbtn" onClick={goToPrevMonth} title="Previous">
  <i className="fas fa-caret-left"></i>
</button>
  );
};
export default PrevButton;