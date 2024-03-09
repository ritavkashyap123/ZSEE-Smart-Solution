import React from "react";
import "./about.scss";
import Who from "./Who";
import Why from "./Why";

const About = () => {
  return (
    <div>
      <div className="About">
        <img src="/marwa 44.JPG" alt="" className="header-image" />
        <div className="header-text">About us</div>
      </div>
      <Who />
      <Why />
    </div>
  );
};

export default About;
