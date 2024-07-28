import React, { useState } from 'react';
import logo from './assets/images/logo.png';
import instagramLogo from './assets/images/instagram.png';
import facebookLogo from './assets/images/facebook.png';
import youtubeLogo from './assets/images/youtube.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the hamburger menu

const Navbar = () => {

  // State Management for If Hamburger Menu is Open
  const [isOpen, setIsOpen] = useState(false);

  // Function to Open or Close Hamburger Menu
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
        <li><a href='#Home'>Home</a></li>
        <li><a href='#AboutUs'>About Us</a></li>
        <li><a href='#Artist'>Artist</a></li>
        <li><a href='#Store'>4700 Store</a></li>
        <li><a href='#AboutUs'>Services</a></li>
      </nav>
      <div className='nav-buttons'>
        <a href='https://www.instagram.com/4700enterprises/?hl=en' target='_blank' rel='noopener noreferrer'><img src={instagramLogo} alt="instagram logo"></img></a>
        <a href='https://www.facebook.com/4700Enterprises/' target='_blank' rel='noopener noreferrer'><img src={facebookLogo} alt="facebook logo"></img></a>
        <a href='https://www.instagram.com/4700enterprises/?hl=en' target='_blank' rel='noopener noreferrer'><img src={youtubeLogo} alt="youtube logo"></img></a>
      </div>
    </header>
  );
};

export default Navbar;
