import './App.css';
import BookCard from './components/BookCard';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import {useState} from 'react'

function App() {


  const [books, setBooks] = useState([
    {
        id: 1,
        title: 'Själsfränden',
        author: 'Sofie Sarenbrant'
    },
    {
        id: 2,
        title: 'Ett fynd att dö för',
        author: 'Anders de la Motte'
    },
    {
        id: 3,
        title: '21 Day challange - Keto',
        author: 'Ulrika Davidsson'
    }
  ])
  


  return (
    <div>
      <Navbar />
      <BookList books/>
      <BookCard id='1' title='Bok' author='Sara'/>
    </div>
  );
}

export default App;
