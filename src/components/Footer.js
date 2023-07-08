import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__column'>
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className='footer__column'>
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className='footer__column'>
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
          </ul>
        </div>
        <div className='footer__column'>
          <h3>Let Us Help You</h3>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
          </ul>
        </div>
      </div>
      <div className="footer__separator"></div>
      <div className="footer__bottom">
        <div className="footer__citiesFirst">
          <span>Australia</span>
          <span>Brazil</span>
          <span>Canada</span>
          <span>China</span>
          <span>France</span>
          <span>Germany</span>
          <span>Italy</span>
          <span>Japan</span>
          <span>Mexico</span>
          <span>Netherlands</span>
          <span>Poland</span>
          <span>Singapore</span>
          <span>Spain</span>
          <span>Turkey</span>
          <span>United Arab Emirates</span>
        </div>

        <div className="footer__citiesSecond">
          <span>United Kingdom</span>
          <span>United States</span>
        </div>
        <div className="footer__bottomRight">
          <span>Conditions of Use & Sale</span>
          <span>Privacy Notice</span>
          <span>Interest-Based Ads</span>
        </div>
        <div className="footer__bottomRight">
          <span>© 1996-2023, Amazon, Inc. or its affiliates</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
