import React, { useState } from 'react';
import './index.css';
import Logo from '../../assets/images/logo.png';
import {IoMenu} from 'react-icons/io5';
import {ImCross} from 'react-icons/im';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
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
      <div className="navbar-side-buttons">
      <a className='navbar-menu-dropdown-container'>
        {!showMenu && <IoMenu onClick={()=>setShowMenu(true)} className='navbar-menu-button' size={35} />}
        {showMenu && <ImCross onClick={()=>setShowMenu(false)} className='navbar-menu-button' size={25} />}
        {showMenu && 
        <ul className="navbar-menu-dropdown">
        <li>About Us</li>
        <li>Our Team</li>
        <li>What we do</li>
        <li>Projects</li>
        <li>Clients</li>
        <li>Contact Us</li>
        </ul>}
      </a>
      <span className="navbar-contact-button">Contact Us</span>
      </div>
    </div>
  )
}

export default Navbar