import React from "react";
import "./home.scss";
import Hero from "./Hero";
import HomeProject from "./HomeProject";
import HomeService from "./HomeService";
import Mission from "./Mission";
import Facts from "./Facts";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <HomeService />
      <h3 className="heading-tertiary u-margin-bottom-small globalheader">
        Facts
      </h3>
      <Facts />
      <Mission />
      <h3 className="heading-tertiary u-margin-bottom-small globalheader">
        News and Updates
      </h3>
      <HomeProject />
    </div>
  );
};

export default Home;
