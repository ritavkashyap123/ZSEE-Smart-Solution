import React from "react";
import "./home.scss";
import Hero from "./Hero";
import Card from "../../components/cards/Card";
import Services from "./Services";
import Impact from "./Impact";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <div className="header u-margin-top-small">
        Our Services
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
