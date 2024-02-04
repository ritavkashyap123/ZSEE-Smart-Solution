import React from "react";
import "./home.scss";
import Hero from "./Hero";
import Card from "../../components/cards/Card";
import Services from "./Services";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      {/* <Card /> */}
      <div className="header">
        Our Services
      </div>
      <Services />
    </div>
  );
};

export default Home;
