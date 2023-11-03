import React, { useState } from 'react';
import './Book.css'

function Book({ arr }) {
  const [availableSeats, setAvailableSeats] = useState(100);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [numOfSeats, setNumOfSeats] = useState(0);

  const handleTimeChange = (e) => {
    const ts = parseInt(e.target.value);
    setSelectedTimeSlot(ts);
    if (Array.isArray(arr) && ts >= 0 && ts < arr.length) {
      setAvailableSeats(arr[ts]);
    }
  };

  const handleBooking = () => {
    const n = availableSeats;
    const m = parseInt(numOfSeats);
    if (m > 0 && n >= m) {
      const updatedArr = [...arr]; // Create a copy of the array
      updatedArr[selectedTimeSlot] = n - m; // Update the selected time slot
      setAvailableSeats(n - m);
    } else {
      alert('Not enough seats available or enter a valid number');
    }
  };

  return (
    <div className="bg-form-bk">
      <h1 className="bookHead">Book Your table for a savouring experience</h1>
      <div className="form-container">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" /><br /><br />
        <label htmlFor="mobile">Mobile Number:</label>
        <input type="number" name="mobile" id="mobile" /> <br /><br />
        <label htmlFor="time-slot">Time slot: </label>
        <select name="time-slot" id="time-slot" onChange={handleTimeChange}>
          <option>Select an option</option>
          <option value="0">8a.m.-11a.m.</option>
          <option value="1">12p.m.-3p.m.</option>
          <option value="2">5p.m.-7p.m.</option>
          <option value="3">8p.m.-11p.m.</option>
        </select><br /><br />
        <div>Available Seats:<span id="seatCap">{availableSeats}</span></div>
        <br />
        <div>Table for:<input type="number" id="numOfSeats" onChange={(e) => setNumOfSeats(e.target.value)} /></div>
        <br />
        <label htmlFor="message">Special Message:</label><br />
        <textarea name="message" id="message" cols="30" rows="4"></textarea><br /><br />
        <button id="bookBtn" onClick={handleBooking}>Book</button>
      </div>
    </div>
  );
}

export default Book;
