import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className='header'>
      <h1><span style={{color: 'white', backgroundColor: 'red'}}>Al</span>maBetter</h1>
      <main>
        <Link to="/" >Resume Template</Link>
        <Link to="/myresume">My Resumes</Link>
        <Link to="/aboutus">About Us</Link>
      </main>
      </nav>

    </div>

    
  )
}

export default Header


