import React from 'react'
import Book from '../components/Book/Book'

function Booking() {
    const arr = [20, 100, 34, 5]; // Define your array here

  return (
    <div>
      <Book arr={arr}/>
    </div>
  )
}

export default Booking
