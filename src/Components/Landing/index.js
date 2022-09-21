import React from 'react';
import './index.css';
import LandingBg from '../../assets/images/landing-page-bg-img.png';

const Landing = () => {
  return (
    <div className='landing-container'>
        <div className="landing-inner-container">
            <div className="landing-content-headings">
                <h1>RELIABLE INFRA <br/>PROJECTS</h1>
                <h5>Best plateform to invest in Real estate property.</h5>
            </div>
            <div className='landing-bg-image-container'>
                <img className='landing-bg-image' src={LandingBg} alt="landing bg image" />
            </div>
        </div>
    </div>
  )
}

export default Landing