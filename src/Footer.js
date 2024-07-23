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
          <li><a href="#">Properties</a></li>
          <li><a href="#">Contact Me</a></li>                                    
        </ul>
      </div>

      <div class="footer-column">
        <h4>Different Type of Properties</h4>
        <ul>
          <li><a href="#">Residental</a></li>
          <li><a href="#">Commerical</a></li>
          <li><a href="#">Rural</a></li>
          <li><a href="#">More Properities</a></li>                                    
        </ul>
      </div>


      <div class="footer-column">
        <h4>About Me</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Submit Homeowner Form</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">More Information</a></li>                                    
        </ul> 
      </div>


    </div>
  </div>
  )
}

export default Footer