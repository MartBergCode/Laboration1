import React from 'react'
import './BookCard.css'

const BookCard = ({id, title, author}) => {
  return (
    <div className='BookContainer'>
        <p>{id}</p>
        <h2>{title}</h2>
        <p>{author}</p>
    </div>
  )
}

export default BookCard