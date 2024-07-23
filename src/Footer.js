import React from 'react'
import instagramLogo from './assets/images/instagram.png';
import facebookLogo from './assets/images/facebook.png';
import youtubeLogo from './assets/images/youtube.png';

const Footer = () => {
  return (
    <div class="footer-container">
    <div class="footer-row">
  
      <div class="footer-column">
        <h4>Main Website</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Artist</a></li>
          <li><a href="#">4700 Store</a></li>                                    
        </ul>
      </div>

      <div class="footer-column">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Audio Production</a></li>
          <li><a href="#">Music Catalog Management</a></li>
          <li><a href="#">Music Distribution</a></li>
          <li><a href="#">Music Promotion</a></li>                                    
        </ul>
      </div>


      <div class="footer-column">
        <h4>Contact Us</h4>
        <ul>
          <li><a href="#">Set An Appointment</a></li>
          <li><a href="#">Submit Music</a></li>
          <li><a href="#">Email Us</a></li>
          <li><a href="#">More Information</a></li>                                    
        </ul> 
      </div>


    </div>
  </div>
  )
}

export default Footer