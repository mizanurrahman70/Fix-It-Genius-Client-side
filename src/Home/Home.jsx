import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services Data/Services';
import CouseUS from './Couse US/CouseUS';
import Banifit from './Banifits/Banifit';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <CouseUS></CouseUS>
          <Banifit></Banifit>
        </div>
    );
};

export default Home;