import React, { useState } from 'react';
import logo from './assets/images/logo.png';
import instagramLogo from './assets/images/instagram.png';
import facebookLogo from './assets/images/facebook.png';
import youtubeLogo from './assets/images/youtube.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the hamburger menu

const Navbar = () => {

  //State Management for If Hamburger Menu is Open
  const [isOpen, setIsOpen] = useState(false);

  //Function to Open or Close Hamburger Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='nav-container'>
      <img src={logo} alt="logo" />
      <button className='hamburger-menu' onClick={toggleMenu} aria-label="Menu">
        {isOpen ? <FaTimes /> : <FaBars />} 
      </button>
      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>About Us</li>
        <li>Latest Releases</li>
        <li>Artist</li>
        <li>Store</li>
        <li>Contact Us</li>
      </nav>
      <div className='nav-buttons'>
        <img src={instagramLogo} alt="instagram logo" />
        <img src={facebookLogo} alt="facebook logo" />
        <img src={youtubeLogo} alt="youtube logo" />
      </div>
    </header>
  );
};

export default Navbar;
