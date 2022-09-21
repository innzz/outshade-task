import React from 'react';
import Employess from '../Employees';
import Landing from '../Landing';
import LegalTeam from '../Legalteam';
import Navbar from '../Navbar';
import NorthBanglore from '../NorthBanglore';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <Landing />
        <Employess />
        <LegalTeam />
        <NorthBanglore />
    </div>
  )
}

export default Home