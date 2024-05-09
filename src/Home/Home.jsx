import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services Data/Services';
import CouseUS from './Couse US/CouseUS';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <CouseUS></CouseUS>
        </div>
    );
};

export default Home;