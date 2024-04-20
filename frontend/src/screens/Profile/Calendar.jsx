import React from 'react';
import "./Calendar.css";

const Calendar = ({ availableDates }) => {
    const generateCalendarDates = (year, month) => {
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);
      const dates = [];
  
      for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        const isAvailable = availableDates.includes(date.toISOString().slice(0, 10));
  
        dates.push({
          date: new Date(date), // Clone the date to prevent mutation
          isAvailable
        });
      }
  
      return dates;
    };
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
  
    const calendarDates = generateCalendarDates(currentYear, currentMonth);
  
    return (
        <div className="calendar">
          <h2>Available Dates</h2>
          <table>
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              {calendarDates.map((date, index) => (
                index % 7 === 0 ? (
                  <tr key={index}>
                    {calendarDates.slice(index, index + 7).map((item, innerIndex) => (
                      <td key={innerIndex} className={item.isAvailable ? 'available' : ''}>
                        <div>{item.date.getDate()}</div>
                      </td>
                    ))}
                  </tr>
                ) : null
              ))}
            </tbody>
          </table>
        </div>
      );
    };
  
export default Calendar;
