import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {  // Corrected component name
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li> {/* Fixed typo in "Policy" */}
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977-9876543210</li>
            <li>Food@gmail.com</li>
          </ul>
        </div>
       </div>
       <hr />
        <p className="footer-copyright">Copyright 2024 @ Food.com - All Rights Reserved.</p> {/* Fixed typo in "Rights" */}
     
    </div>
  );
};

export default Footer; // Corrected component name
