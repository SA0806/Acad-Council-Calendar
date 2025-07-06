import React from 'react';
const TodayButton = ({ setCurrentDate }) => (
//   <button
//     className="btn btn-outline-primary toolbar-button"
//     onClick={() => setCurrentDate(new Date())}
//   >
//     Today
//   </button>
  <button className="btn btn-outline-primary TodayButton" onClick={() => setCurrentDate(new Date())}>
  <i className="fas fa-calendar-day me-1"></i> Today
</button>

);
export default TodayButton;