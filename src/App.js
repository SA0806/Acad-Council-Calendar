import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import events from './Data/events.json';

// Components
import FilterPanel from './Components/Filters/FilterPanel';
import CalendarComponent from './Components/Calendar/CalendarComponent';
import CalendarToolbar from './Components/Toolbar/CalendarToolbar';

function App() {
  const [filters, setFilters] = useState({
    Orientation: true,
    Academic: true,
    Exam: true,
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter logic
  const filteredEvents = events.filter((event) => filters[event.type]);

  // Sync date with calendar
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(currentDate);
    }
  }, [currentDate]);

  const handleFilterChange = (type) => {
    setFilters((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <div className="container-fluid p-4">
      <h2 className="text-center mb-4">ACADEMIC CALENDAR</h2>
      <div className="row">
        {/* Sidebar filters */}
        <div className="col-md-2 print-hidden mb-4">
          <div className="w-100 mt-5">
          <FilterPanel filters={filters} onToggle={handleFilterChange} />
          </div>
        </div>

        {/* Main calendar area */}
        <div className="col-md-9">
          <div className="ms-md-4"> 
          {/* Toolbar */}
          <CalendarToolbar
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />

          {/* Calendar */}
          <CalendarComponent
            calendarRef={calendarRef}
            events={filteredEvents}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
              onDateChange={setCurrentDate}  

          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
