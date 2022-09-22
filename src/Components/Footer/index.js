import React from 'react';
import './index.css';
import Gmap from '../../assets/images/Gmap.png';
import Logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-content">
            <div className="footer-first-section">
                <div className="footer-logo-section">
                    <img src={Logo} alt="logo" />
                </div>
                <li>Best plateform to invest in Real estate property.</li>
                <li>Own a high-profile real estate property with  Rubix Application. It Allows you to invest in real estate property with lower risks.</li>
            </div>
            <div className="footer-second-section">
                <li>Contact Information</li>
                <li><span>Reg Address:</span> No 407 A, Vinayaka Residency, 6A 
                Temple Street, Tala Kaveri Layout, Amruthahalli, 
                Bangalore – 560092</li>
                <li><span>Office Address:</span> No 3, 1st Floor, YVM Towers, 
                New International Airport Road, Bagalur Cross, 
                Bangalore – 560063
                </li>
                <li><span>Contact:</span> +91 9010900930 | +91 9900620777</li>
            </div>
            <div className="footer-third-section">
                <img src={Gmap} alt="g map" />
            </div>
        </div>
    </div>
  )
}

export default Footer