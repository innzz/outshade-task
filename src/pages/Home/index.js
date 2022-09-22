import React from 'react';
import Employess from '../../Components/Home/Employees';
import Landing from '../../Components/Home/Landing';
import LegalTeam from '../../Components/Home/Legalteam';
import Navbar from '../../Components/Navbar';
import NorthBanglore from '../../Components/Home/NorthBanglore';
import WhatWeDo from '../../Components/Home/Whatwedo';
import OurTrackRecord from '../../Components/Home/Ourtrackrecords';
import OurLatestDeals from '../../Components/Home/Ourlatestdeals';
import RoadMap from '../../Components/Home/Roadmap';
import CurrentProposal from '../../Components/Home/CurrentProposal';
import Sketch from '../../Components/Home/Sketch';
import Clients from '../../Components/Home/Clients';
import Customers from '../../Components/Home/Customers';
import Contact from '../../Components/Home/Contact';
import Footer from '../../Components/Footer';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <Landing />
        <Employess />
        <LegalTeam />
        <NorthBanglore />
        <WhatWeDo />
        <OurTrackRecord />
        <OurLatestDeals />
        <RoadMap />
        <CurrentProposal />
        <Sketch />
        <Clients />
        <Customers />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home