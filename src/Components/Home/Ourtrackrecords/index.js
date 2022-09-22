import React from 'react';
import './index.css';
import {TiTick} from 'react-icons/ti';
import outTrackRecordDottedImg from '../../../assets/images/ourtrackrecord.png';

const OurTrackRecord = () => {
  return (
    <div className='ourTrackRecord-container'>
      <div className="ourTrackRecord-headings"><h1>OUR TRACK RECORD</h1></div>
      <div className="ourTrackRecord-content">
        <div className="ourTrackRecord-left-section-text">
            <div className="ourTrackRecord-texts">
            <div><TiTick size={25} /><div>Meticulously sourced land parcels
            situated in high appreciation areas</div></div>
            <div><TiTick size={25}/><div>Highly professional team of 
            experts to provide an unmatched 
            level of service to our customers</div>
            </div>
            <div><TiTick size={25}/><div>Highly professional team of 
            experts to provide an unmatched 
            level of service to our customers</div>
            </div>
            <div><TiTick size={25}/><div>Exceptional returns to our elite 
            team of investors with low risk
            compared to any other options</div>
            </div>
            <div><TiTick size={25}/><div>Reliable and Repetitive premium 
            client base</div>
            </div>
            </div>
        </div>
        <div className="ourTrackRecord-right-section-cards">
          <div className="ourTrackRecord-cards-container">
          <div className="ourTrackRecord-row-cards"><span className="ourTrackRecord-card"><h2>750+</h2><h5>TOTAL
          ACRES</h5></span><span className="ourTrackRecord-card"><h2>10+</h2><h5>YEARS EXPERIENCE</h5></span></div>
          <div className="ourTrackRecord-row-cards"><span className="ourTrackRecord-card"><h2>750+</h2><h5>TOTAL
          ACRES</h5></span><span className="ourTrackRecord-card"><h2>10+</h2><h5>YEARS EXPERIENCE</h5></span></div>
          <div className="ourTrackRecord-right-section-cards-top-bg-img"><img src={outTrackRecordDottedImg} alt="dotted image" /></div>
          <div className="ourTrackRecord-right-section-cards-bottom-bg-img"><img src={outTrackRecordDottedImg} alt="dotted image" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTrackRecord