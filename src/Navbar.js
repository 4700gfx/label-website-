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
        <li><a href='#Home'>Home</a></li>
        <li><a href='#AboutUs'>About Us</a></li>
        <li><a href='#Artist'>Artist</a></li>
        <li><a href='#Store'>4700 Store</a></li>
        <li><a href='#AboutUs'>Services</a></li>
      </nav>
      <div className='nav-buttons'>
        <img src={instagramLogo} alt="instagram logo"><a href='https://www.instagram.com/4700enterprises/?hl=en'></a></img>
        <img src={facebookLogo} alt="facebook logo"><a href='https://www.facebook.com/4700Enterprises/'></a></img>
        <img src={youtubeLogo} alt="youtube logo"><a href='https://www.instagram.com/4700enterprises/?hl=en'></a></img>
      </div>
    </header>
  );
};

export default Navbar;
