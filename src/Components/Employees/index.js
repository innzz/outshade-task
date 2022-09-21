import React from 'react';
import './index.css';
import Employee1 from '../../assets/images/employee1.png';
import Employee2 from '../../assets/images/employee2.png';
import Employee3 from '../../assets/images/employee3.png';

const Employess = () => {
  return (
    <div className='employees-container'>
        <div className="employees-headings">
            <h1>WHO WE ARE</h1>
            <h5>We are a team of passionate young entrepreneurs with a vision united towards aggregating big chunks of land 
            for clients across Bangalore and Hyderabad markets. We have a combined experience of more than 25 years in 
            </h5>
            <span>“Real Estate and Construction”</span>
        </div>
        <div className="employees-cards-section">
            <div className="employee-card">
                <img src={Employee1} alt="employee 1" className="employee-img" />
                <h3>Gunasekhar</h3>
                <p>17 years into Real Estate | 
                Land Identification, Sales and 
                Negotiation Skills | Resale or 
                JV Deals expert</p>
            </div>
            <div className="employee-card">
                <img src={Employee2} alt="employee 2" className="employee-img" />
                <h3>Gunasekhar</h3>
                <p>17 years into Real Estate | 
                Land Identification, Sales and 
                Negotiation Skills | Resale or 
                JV Deals expert</p>
            </div>
            <div className="employee-card">
                <img src={Employee3} alt="employee 3" className="employee-img" />
                <h3>Gunasekhar</h3>
                <p>17 years into Real Estate | 
                Land Identification, Sales and 
                Negotiation Skills | Resale or 
                JV Deals expert</p>
            </div>
        </div>
    </div>
  )
}

export default Employess