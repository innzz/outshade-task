import React from 'react';
import './index.css';
import ContactImg from '../../../assets/images/contact.png';

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="contact-headings">
            <h1>GET IN TOUCH</h1>
            <h3>We Would Love To Hear From You!</h3>
            <h5>If you have any questions, comments, or would like more information, please don't hesitate to get in touch with us. We would be happy to answer any of your questions.</h5>
        </div>
        <div className="contact-content">
            <div className="contact-left-section">
                <div className="contact-form">
                    <div>
                        Name
                    </div>
                    <input type="text" />
                    <div>
                        Email ID
                    </div>
                    <input type="text" />
                    <div>
                        Mobile Number
                    </div>
                    <input type="text" />
                    <div>
                        Message
                    </div>
                    <textarea  cols="23"/>
                    <div className="contact-submit-button">
                        SUBMIT
                    </div>
                </div>
            </div>
            <div className="contact-right-section">
                <div className="contact-img-container">
                    <img src={ContactImg} alt="contact us" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact