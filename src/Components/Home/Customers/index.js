import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';
import Customer1 from '../../../assets/images/employee1.png';

const Customers = () => {
  return (
    <div className='customers-container'>
        <div className="customers-headings">
            <h1>WHAT DO OUR CUSTOMERS SAY?</h1>
        </div>
        <div className="customers-carousel">
        <Carousel slide={false}>
            <Carousel.Item>
                <div className="customers-carousel-content">
                    <div className="customers-profile-pic">
                        <img src={Customer1} alt="profile" />
                    </div>
                    <p>I'm new to investing, but I've heard investing in real estate is not only highly lucrative, it's also a great way to build wealth over time. As someone with limited resources and time available for this kind of investment, however, I found that investing in real-estate was just too expensive for me at this point in my life. That's why I'm so excited about Rubix - it lets me do all the fun parts of real estate investing, without any of the hassles. I can invest whenever I want, on my own time, and with only a small portion of my income depending on how much I can spare at that given time. **With Rubix , I get to enjoy the significant appreciation that real estate assets experience over time, without any of the downsides that come from owning property.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="customers-carousel-content">
                    <div className="customers-profile-pic">
                        <img src={Customer1} alt="profile" />
                    </div>
                    <p>I'm new to investing, but I've heard investing in real estate is not only highly lucrative, it's also a great way to build wealth over time. As someone with limited resources and time available for this kind of investment, however, I found that investing in real-estate was just too expensive for me at this point in my life. That's why I'm so excited about Rubix - it lets me do all the fun parts of real estate investing, without any of the hassles. I can invest whenever I want, on my own time, and with only a small portion of my income depending on how much I can spare at that given time. **With Rubix , I get to enjoy the significant appreciation that real estate assets experience over time, without any of the downsides that come from owning property.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="customers-carousel-content">
                    <div className="customers-profile-pic">
                        <img src={Customer1} alt="profile" />
                    </div>
                    <p>I'm new to investing, but I've heard investing in real estate is not only highly lucrative, it's also a great way to build wealth over time. As someone with limited resources and time available for this kind of investment, however, I found that investing in real-estate was just too expensive for me at this point in my life. That's why I'm so excited about Rubix - it lets me do all the fun parts of real estate investing, without any of the hassles. I can invest whenever I want, on my own time, and with only a small portion of my income depending on how much I can spare at that given time. **With Rubix , I get to enjoy the significant appreciation that real estate assets experience over time, without any of the downsides that come from owning property.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="customers-carousel-content">
                    <div className="customers-profile-pic">
                        <img src={Customer1} alt="profile" />
                    </div>
                    <p>I'm new to investing, but I've heard investing in real estate is not only highly lucrative, it's also a great way to build wealth over time. As someone with limited resources and time available for this kind of investment, however, I found that investing in real-estate was just too expensive for me at this point in my life. That's why I'm so excited about Rubix - it lets me do all the fun parts of real estate investing, without any of the hassles. I can invest whenever I want, on my own time, and with only a small portion of my income depending on how much I can spare at that given time. **With Rubix , I get to enjoy the significant appreciation that real estate assets experience over time, without any of the downsides that come from owning property.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="customers-carousel-content">
                    <div className="customers-profile-pic">
                        <img src={Customer1} alt="profile" />
                    </div>
                    <p>I'm new to investing, but I've heard investing in real estate is not only highly lucrative, it's also a great way to build wealth over time. As someone with limited resources and time available for this kind of investment, however, I found that investing in real-estate was just too expensive for me at this point in my life. That's why I'm so excited about Rubix - it lets me do all the fun parts of real estate investing, without any of the hassles. I can invest whenever I want, on my own time, and with only a small portion of my income depending on how much I can spare at that given time. **With Rubix , I get to enjoy the significant appreciation that real estate assets experience over time, without any of the downsides that come from owning property.</p>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
    </div>
  )
}

export default Customers