import React from 'react';
import Table from '../../Table';
import './index.css';
import {TiTick} from 'react-icons/ti';

const CurrentProposal = () => {
    const tableContent = [ 
        {
            key: 'Zone',
            value: 'North Bangalore'
        },
        {
            key: 'Location',
            value: 'Devanahalli, Bangalore'
        },
        {
            key: 'Area',
            value: '180 Acres'
        },
        {
            key: 'Special Features',
            value: 'Within 100 meters - Godrej Reserve (100 acres layout); Century (60 acre layout)'
        },
        {
            key: 'Deal Type',
            value: 'Resale'
        },
        {
            key: 'Client',
            value: 'Sumadhura Group, Vasavi Group, Harsha'
        }];

  return (
    <div id='aboutus' className='currentProposal-container'>
        <div className="currentProposal-headings">
            <h1>OUR CURRENT PROPOSAL</h1>
        </div>
        <div className="currentProposal-content">
            <div className="currentProposal-left-section">
                <Table tableContent={tableContent} />
            </div>
            <div className="currentProposal-right-section">
            <div className="currentProposal-texts">
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
            <span style={{width: "fit-content",marginLeft: "40px",marginTop: "10px"}} className="navbar-contact-button">Contact Us</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentProposal