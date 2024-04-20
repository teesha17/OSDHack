import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

function GreenDatesCalendar({ greenDates }) {
  // Function to determine the tile className
  const tileClassName = ({ date, view }) => {
    // Check if the view is 'month'
    if (view === 'month') {
      // Today's date
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Check if date is today
      if (date.getTime() === today.getTime()) {
        return 'today-highlight';
      }

      // Check if the date should be highlighted as green
      if (greenDates.some(greenDate =>
        date.getDate() === greenDate.getDate() &&
        date.getMonth() === greenDate.getMonth() &&
        date.getFullYear() === greenDate.getFullYear())) {
        return 'green-highlight';
      }
    }
  };

  return (
    <div style={{ height:'30vh', width:"30vw",margin:"0px 30px 100px 120px",boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
      <Calendar
        tileClassName={tileClassName}
      />
      <style jsx>{`
        .today-highlight {
          background-color: rgb(0, 110, 220);  // Adjusted comment for blue color
          color: white;
        }
        .green-highlight {
          background-color: #a0f0a0;  // Green color for special dates
        }
        // Additional styling for the calendar itself can be added here if necessary
      `}</style>
    </div>
  );
}

export default GreenDatesCalendar;
