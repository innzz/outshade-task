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
      <a href="/"><img src={Logo} alt="logo" className='navbar-logo-image' /></a>
      </div>
      <div className="navbar-options-container">
        <span className="navbar-options"><a href="#aboutus">About Us</a></span>
        <span className="navbar-options"><a href="#whoweare">Our Team</a></span>
        <span className="navbar-options"><a href="#whatwedo">What we do</a></span>
        <span className="navbar-options"><a href="#projects">Projects</a></span>
        <span className="navbar-options"><a href="#clients">Clients</a></span>
      </div>
      <div className="navbar-side-buttons">
      <a className='navbar-menu-dropdown-container'>
        {!showMenu && <IoMenu onClick={()=>setShowMenu(true)} className='navbar-menu-button' size={35} />}
        {showMenu && <ImCross onClick={()=>setShowMenu(false)} className='navbar-menu-button' size={25} />}
        {showMenu && 
        <ul className="navbar-menu-dropdown">
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#whoweare">Our Team</a></li>
        <li><a href="#whatwedo">What we do</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contactus">Contact Us</a></li>
        </ul>}
      </a>
      <span className="navbar-contact-button"><a href="#contactus">Contact Us</a></span>
      </div>
    </div>
  )
}

export default Navbar