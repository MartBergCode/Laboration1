import React from 'react'
import {useState} from 'react'
import './Navbar.css'

function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleLoggedIn = () => {
        setIsLoggedIn(state => !state)
        console.log('Logged');
      }

  return (
    <div className='container'>
        <h1>Navbar</h1>
        {isLoggedIn? <><div>Martin</div> <button onClick={toggleLoggedIn}>Log out</button></>: <button onClick={toggleLoggedIn}>Log in</button>}
    </div>
  )
}

export default Navbar