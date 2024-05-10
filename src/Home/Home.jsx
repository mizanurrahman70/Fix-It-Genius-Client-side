import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services Data/Services';
import CouseUS from './Couse US/CouseUS';
import Banifit from './Banifits/Banifit';
import Team from './Our Team/Team';

const Home = () => {
    return (
        <div className='space-y-5'>
          <Banner></Banner>
          <Services></Services>
          <CouseUS></CouseUS>
          <Banifit></Banifit>
          <Team></Team>
        </div>
    );
};

export default Home;