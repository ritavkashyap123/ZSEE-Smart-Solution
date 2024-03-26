import React, { useState } from "react";
import ServicesContent from "./ServicesContent";

const Water = () => {
  const { water } = ServicesContent();
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
    <div className="Water">
      {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
      <div className="header-text"></div>
      <div className="subcategory" style={{ flexWrap: "wrap" }}>
        {water.map((water, index) => (
          <div
            className={`subcatname ${
              activeSubcategory === `#${water.id}` ? "active" : ""
            }`}
            onClick={() => handleClick(`#${water.id}`)}
            key={index}
          >
            {water.title}
          </div>
        ))}
      </div>
      <div className="tabbar"></div>
      {water.map((water, index) => (
        <div key={index}>
          <h3
            className="heading-tertiary u-margin-bottom-small globalheader"
            id={water.id}
          >
            {water.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Water;
