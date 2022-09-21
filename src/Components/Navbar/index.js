import React from 'react';
import './index.css';
import Logo from '../../assets/images/logo.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar-logo">
      <img src={Logo} alt="logo" className='navbar-logo-image' />
      </div>
      <div className="navbar-options-container">
        <span className="navbar-options">About Us</span>
        <span className="navbar-options">Our Team</span>
        <span className="navbar-options">What we do</span>
        <span className="navbar-options">Projects</span>
        <span className="navbar-options">Clients</span>
      </div>
      <span className="navbar-contact-button">Contact Us</span>
    </div>
  )
}

export default Navbar