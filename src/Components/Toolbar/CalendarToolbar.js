import React from 'react';
import './CalendarToolbar.css';

import CurrentLabel from './CurrentLabel';
import TodayButton from './TodayButton';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';
import PrintButton from './PrintButton';

const CalendarToolbar = ({ currentDate, setCurrentDate }) => {
  return (
    <div className="calendar-toolbar">
      <CurrentLabel currentDate={currentDate} />

      <TodayButton setCurrentDate={setCurrentDate} />
      <PrevButton currentDate={currentDate} setCurrentDate={setCurrentDate} />
       <MonthDropdown currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <YearDropdown currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <NextButton currentDate={currentDate} setCurrentDate={setCurrentDate} />

     

      <PrintButton />
    </div>
  );
};

export default CalendarToolbar;
