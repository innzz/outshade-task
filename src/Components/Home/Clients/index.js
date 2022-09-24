import React from 'react';
import './index.css';
import Client1 from '../../../assets/images/client1.png';
import Client2 from '../../../assets/images/client2.png';
import Client3 from '../../../assets/images/client3.png';
import Client4 from '../../../assets/images/client4.png';
import Client5 from '../../../assets/images/client5.png';
import Client6 from '../../../assets/images/client6.png';
import Client7 from '../../../assets/images/client7.png';
import Client8 from '../../../assets/images/client8.png';
import Client9 from '../../../assets/images/client9.png';
import Client10 from '../../../assets/images/client10.png';
import Client11 from '../../../assets/images/client11.png';
import Client12 from '../../../assets/images/client12.png';
import Client13 from '../../../assets/images/client13.png';

const Clients = () => {
  return (
    <div id='clients' className='clients-container'>
        <div className="clients-headings">
            <h1>OUR ELITE CLIENTS</h1>
        </div>
        <div className="clients-cards-section">
            <div className="clients-card">
                <img src={Client1} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client2} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client3} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client4} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client5} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client6} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client7} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client8} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client9} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client10} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client11} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client12} alt="client" />
            </div>
            <div className="clients-card">
                <img src={Client13} alt="client" />
            </div>
        </div>
    </div>
  )
}

export default Clients