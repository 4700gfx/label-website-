import React from 'react'
import logo from './assets/images/logo.png'

const Navbar = () => {
  return (
    <header className='nav-container'>
      <img src={logo} alt="logo" />
      <nav>
        <li>Home</li>
        <li>About Us</li>
        <li>Latest Releases</li>
        <li>Artist</li>
        <li>Contact Us</li>
      </nav>
    </header>
  )
}

export default Navbar