import React from 'react';
import './index.css';
import NorthBangloreImg from '../../assets/images/northbanglore.png';

const NorthBanglore = () => {
  return (
    <div className='northBanglore-container'>
        <div className="northBanglore-heading">
            <h1>WHY NORTH BANGLORE</h1>
        </div>
        <div className="northBanglore-inner-content">
            <div className="northBanglore-left-section-image-container">
                <img className='northBanglore-left-section-image' src={NorthBangloreImg} alt="north banglore" />
            </div>
            <div className="northBanglore-right-section-texts">
                <ul>
                    <li>Diversified Builders/Developers</li>
                    <li>Less Legal Disputes</li>
                    <li>Faster Development Approvals</li>
                    <li>Low Land Prices or High Margins</li>
                    <li>Easiest Zone Conversion Rules</li>
                    <li>Channelized Growth towards North (Airport & SEZ Hubs)</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NorthBanglore