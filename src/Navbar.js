import React from 'react'
import logo from './assets/images/logo.png'
import instagramLogo from './assets/images/instagram.png'
import facebookLogo from './assets/images/facebook.png'
import youtubeLogo from './assets/images/youtube.png'

const Navbar = () => {
  return (
    <header className='nav-container'>
      <img src={logo} alt="logo" />
      <nav>
        <li>Home</li>
        <li>About Us</li>
        <li>Latest Releases</li>
        <li>Artist</li>
        <li>Store</li>
        <li>Contact Us</li>
      </nav>
      <div className='nav-buttons'>
        <img src={instagramLogo} alt="logo" />
        <img src={facebookLogo} alt="logo" />
        <img src={youtubeLogo} alt="logo" />
      </div>

    </header>
  )
}

export default Navbar