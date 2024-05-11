import React from "react";
import Banner from "./Banner/Banner";
import Services from "./Services Data/Services";
import CouseUS from "./Couse US/CouseUS";
import Banifit from "./Banifits/Banifit";
import Team from "./Our Team/Team";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="space-y-5">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <CouseUS></CouseUS>
      <Banifit></Banifit>
      <Team></Team>
    </div>
  );
};

export default Home;
