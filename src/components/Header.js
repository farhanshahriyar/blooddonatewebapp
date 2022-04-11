import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to='/'>
          Home
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
        <Link className='links' to='/aboutus'>
            About Us
          </Link>
        <Link className='links' to='/donate'>
            Donate Now 
          </Link>
          <Link className='links' to='/request'>
            Request
          </Link>
          <Link className='links' to='/login'>
            Login
          </Link>
          <Link className='links' to='/signup'>
            Sign Up
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
