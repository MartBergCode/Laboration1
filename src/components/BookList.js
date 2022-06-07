import React from 'react'
import BookCard from './BookCard'
import {useState} from 'react'
import './BookList.css'

const BookList = (books) => {

    //list of books
    // const [booksListed, setBooksListed] = useState(false)


    // const listBooks = (bookArray) => {
    //     {bookArray.map(bookCard =>(
    //         <BookCard />
    //     ))}
    // }

    const listBooks = books.map(bookCard => (
        <BookCard id={books.id} title={books.title} author={books.author}/> 
    ))

  return (
    <div className='listContainer'>
        {/* <button onClick={listBooks}>List Books</button> */}

    
        
    </div>
    
  )
}

export default BookList