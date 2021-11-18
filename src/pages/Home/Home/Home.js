import React from 'react';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
          <Navigation></Navigation>
          <Banner></Banner>
          <Services></Services>
          <AppointmentBanner></AppointmentBanner>
          <Doctors></Doctors>
        </div>
    );
};

export default Home;