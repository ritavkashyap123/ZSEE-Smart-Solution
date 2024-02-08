import React from "react";
import "./home.scss";
import Hero from "./Hero";
import ServiceSection from "./ServiceSection";
import ImpactSection from "./ImpactSection";
import MV from "./MV";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <div className="header u-margin-top-mid">
        Our Services
      </div>
      <div className="subheader u-margin-bottom-small">
        What we do offer
      </div>
      <ServiceSection />
      <div className="header u-margin-top-mid u-margin-bottom-small">
        Mission and Vision
      </div>
      <MV />
      <div className="header u-margin-top-mid u-margin-bottom-small">
        Impacts
      </div>
      <ImpactSection />
    </div>
  );
};

export default Home;
