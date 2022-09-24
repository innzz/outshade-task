import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.css';
import Customer1 from '../../../assets/images/employee1.png';
import Customer2 from '../../../assets/images/employee2.png';
import Customer3 from '../../../assets/images/employee3.png';

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
                        <img src={Customer2} alt="profile" />
                    </div>
                    <p>My first investment through Rubix was a complete success and the whole experience was smooth and efficient. The team is very dedicated and enthusiastic! Rubix has been an excellent support in my early investing career. They take care of everything from acquisition to negotiating to the distribution of expenses, rents, and profits.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="customers-carousel-content">
                    <div className="customers-profile-pic">
                        <img src={Customer3} alt="profile" />
                    </div>
                    <p>As a long-term investor, I was looking for a platform that would allow me to invest in high-profile real estate with lower risk. I found that in Rubix. With fractional investments and blockchain-powered smart contracts, I can be sure that my investment is safe and secure. The end-to-end management of my investment makes life easy for me, and the liquidity of the platform ensures that I can cash out my investment anytime I want. Plus, the affordable investment options make it possible for me to invest in real estate even with a limited budget. Overall, I'm extremely satisfied with Rubix and would recommend it to anyone looking for a solid real estate investment platform.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="customers-carousel-content">
                    <div className="customers-profile-pic">
                        <img src={Customer2} alt="profile" />
                    </div>
                    <p>I'm new to investing, but I've heard investing in real estate is not only highly lucrative, it's also a great way to build wealth over time. As someone with limited resources and time available for this kind of investment, however, I found that investing in real-estate was just too expensive for me at this point in my life. That's why I'm so excited about Rubix - it lets me do all the fun parts of real estate investing, without any of the hassles. I can invest whenever I want, on my own time, and with only a small portion of my income depending on how much I can spare at that given time. **With Rubix , I get to enjoy the significant appreciation that real estate assets experience over time, without any of the downsides that come from owning property.</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="customers-carousel-content">
                    <div className="customers-profile-pic">
                        <img src={Customer3} alt="profile" />
                    </div>
                    <p>I've been investing in real estate for years and I was really excited when I found Rubix. They make it so easy to invest in high-profile properties with fractional ownership and the returns are amazing. The team is really helpful and they take care of everything for you, from property acquisition to arranging rent and managing payments. It's the perfect investment for anyone looking for a stress-free experience and great returns. Sign up now and you won't regret it!</p>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
    </div>
  )
}

export default Customers