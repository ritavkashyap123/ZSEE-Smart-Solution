import React, { useState } from "react";
import "./about.scss";
import Who from "./Who";
import Why from "./Why";
import Footprints from "./Footprints";
import Team from "./Team";

const About = () => {
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleClick = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 200;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setActiveSubcategory(id); // Set the active subcategory
    }
  };

  return (
    <div>
      <div className="About">
        <div className="header-text"></div>
        <div className="subcategory">
          <div
            // className="subcatname"
            className={`subcatname ${
              activeSubcategory === "#about-the-company" ? "active" : ""
            }`}
            onClick={() => handleClick("#about-the-company")}
          >
            About the Company
          </div>
          <div
            // className="subcatname"
            className={`subcatname ${
              activeSubcategory === "#our-team" ? "active" : ""
            }`}
            onClick={() => handleClick("#our-team")}
          >
            Company Ensemble
          </div>
        </div>
        <div className="tabbar"></div>
        <Who />
        <Why />
        <Footprints />
        <Team />
      </div>
    </div>
  );
};

export default About;
