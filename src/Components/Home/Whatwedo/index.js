import React from 'react';
import './index.css';

const WhatWeDo = () => {
  return (
    <div className='whatWeDo-container'>
        <div className="whatWeDo-headings"><h1>WHAT WE DO</h1></div>
        <div className="whatWeDo-cards-container">
            <div className="whatWeDo-single-card"><span className="whatWeDo-card">Small lands(From Farmers)</span></div>
            <div className="whatWeDo-multiple-cards"><span className="whatWeDo-card">Small lands(From Farmers)</span><span className="whatWeDo-card">Small lands(From Farmers)</span><span className="whatWeDo-card">Small lands(From Farmers)</span></div>
            <div className="whatWeDo-single-card"><span className="whatWeDo-card">Small lands(From Farmers)</span></div>
            <div className="whatWeDo-multiple-cards"><span className="whatWeDo-card">Small lands(From Farmers)</span><span className="whatWeDo-card">Small lands(From Farmers)</span></div>
            <div className="whatWeDo-single-card"><span className="whatWeDo-card">Small lands(From Farmers)</span></div>
        </div>
        <div className="whatWeDo-footer">
            <span>Land Aggregation | Land Development | Resale or JV Deals</span>
        </div>
    </div>
  )
}

export default WhatWeDo