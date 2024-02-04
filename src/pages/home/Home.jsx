import React from "react";
import "./home.scss";
import Hero from './Hero'
import Card from "../../components/cards/Card";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Card />
    </div>
  );
};

export default Home;
