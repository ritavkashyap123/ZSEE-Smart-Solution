import React, { useState } from "react";
import ServicesContent from "./ServicesContent";

const Lightning = () => {
  const { lightning } = ServicesContent();
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleClick = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 200;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setActiveSubcategory(id);
    }
  };
  return (
    <div className="Lighting">
      {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
      <div className="header-text"></div>
      <div className="subcategory" style={{ flexWrap: "wrap" }}>
        {lightning.map((light, index) => (
          <div
          className={`subcatname ${
            activeSubcategory === `#${light.id}`? "active" : ""
          }`}
            onClick={() => handleClick(`#${light.id}`)}
            key={index}
          >
            {light.title}
          </div>
        ))}
      </div>
      <div className="tabbar"></div>
      {lightning.map((light, index) => (
        <div key={index}>
          <h3
            className="heading-tertiary u-margin-bottom-small globalheader"
            id={light.id}
          >
            {light.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Lightning;
