import React from "react";
import "./home.scss";
import Hero from "./Hero";
import Services from "./Services";
import Impact from "./Impact";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <div className="header u-margin-top-mid">
        Our Services
      </div>
      <div className="subheader">
        What we do offer
      </div>
      <Services />
      <div className="header">
        Impacts
      </div>
      <Impact />
    </div>
  );
};

export default Home;
