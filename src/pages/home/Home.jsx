import React from "react";
import "./home.scss";
import Hero from "./Hero";
import Services from "./Services";
import ImpactSection from "./ImpactSection";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <div className="header u-margin-top-mid">
        Our Services
      </div>
      <div className="subheader u-margin-bottom-mid">
        What we do offer
      </div>
      <Services />
      <div className="header u-margin-top-mid">
        Mission and Vision
      </div>
      <div className="header">
        Impacts
      </div>
      <ImpactSection />
    </div>
  );
};

export default Home;
