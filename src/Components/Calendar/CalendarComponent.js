import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './CalendarComponent.css';

const CalendarComponent = ({ events, selectedEvent, setSelectedEvent, calendarRef  }) => {
//   const calendarRef = useRef(null);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
      description: clickInfo.event.extendedProps.description || 'No description',
    });
    const modal = new window.bootstrap.Modal(document.getElementById('eventModal'));
    modal.show();
  };

  return (
    <>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        height="auto"
        headerToolbar={false}
        
      />
    </>
  );
};

export default CalendarComponent;
