import React from 'react';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
          <Navigation></Navigation>
          <Banner></Banner>
          <Services></Services>
          <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;