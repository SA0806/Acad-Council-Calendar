import React from 'react';
const NextButton = ({ currentDate, setCurrentDate }) => {
  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    // <button className="btn btn-outline-secondary toolbar-button" onClick={goToNextMonth}>
    //   ▶️
    // </button>
    <button className="btn btn-light Nextbtn" onClick={goToNextMonth} title="Next">
  <i className="fas fa-caret-right"></i>
</button>
  );
};
export default NextButton;