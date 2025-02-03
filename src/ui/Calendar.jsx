import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import Font Awesome icons

function CalendarComponent() {
  const [date, setDate] = useState(new Date()); // Current selected date

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log('Selected Date:', newDate); // You can perform actions with the selected date
  };

  return (
    <div className="bg-gray-200 p-2 shadow-xl rounded-lg mx-auto mt-8">
      <h3 className="text-2xl font-semibold mb-4 text-gray-700 merienda-title">Agenda for Today</h3>
      
      <Calendar 
        onChange={handleDateChange} 
        value={date} 
        className="react-calendar shadow-lg rounded-lg w-full bg-gray-100 border-0 overflow-hidden text-sm"
        prevLabel={<FaChevronLeft className="text-lg" />}  // Adjust icon size with text-lg class
        nextLabel={<FaChevronRight className="text-lg" />} // Adjust icon size with text-lg class
      />
      
      <style jsx>{`
        /* Apply 'Modern Antiqua' font to the whole calendar */
        .react-calendar {
          font-family: 'Modern Antiqua', serif;
        }

        /* Apply 'Modern Antiqua' font to the dates */
        .react-calendar__tile {
          font-family: 'Modern Antiqua', serif;
        }

        /* Apply 'Modern Antiqua' font to day names (Mon, Tue, etc.) */
        .react-calendar__month-view__weekdays__weekday {
          font-family: 'Modern Antiqua', serif;
        }

        /* Customize the arrow button styles */
        .react-calendar__navigation button {
          font-size: 1.25rem; /* Slightly smaller arrows */
          color: #4a5568; /* Arrow color */
        }

        /* Target current day and make it yellow with a circle */
        .react-calendar__tile--now {
          background-color:rgb(215, 72, 240); /* Yellow background */
          color: white; /* White text */
          border-radius: 50%; /* Make it circular */
        }

        /* Optional: Add hover effect for current day */
        .react-calendar__tile--now:hover {
          background-color:rgb(230, 0, 153); /* Slightly darker yellow on hover */
        }
      `}</style>
    </div>
  );
}

export default CalendarComponent;
