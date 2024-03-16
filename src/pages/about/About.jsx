import React from "react";
import "./about.scss";
import Who from "./Who";
import Why from "./Why";
import Footprints from "./Footprints";
import Team from "./Team";

const About = () => {
  const handleClick = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 50;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="About">
        {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
        <div className="header-text"></div>
        <div className="subcategory">
          <div
            className="subcatname"
            onClick={() => handleClick("#about-the-company")}
          >
            About the Company
          </div>
          <div className="subcatname" onClick={() => handleClick("#our-team")}>
            Human Capitals
          </div>
        </div>
        <Who />
        <Why />
        <Footprints />
        <Team />
      </div>
    </div>
  );
};

export default About;
