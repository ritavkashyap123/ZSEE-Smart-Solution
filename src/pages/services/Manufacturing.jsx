import React, { useState } from "react";
import ServicesContent from "./ServicesContent";

const Manufacturing = () => {
  const { manufacturing } = ServicesContent();
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
    <div className="Manufacturing">
      {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
      <div className="header-text"></div>
      <div className="subcategory" style={{ flexWrap: "wrap" }}>
        {manufacturing.map((man, index) => (
          <div
            className={`subcatname ${
              activeSubcategory === `#${man.id}` ? "active" : ""
            }`}
            onClick={() => handleClick(`#${man.id}`)}
            key={index}
          >
            {man.title}
          </div>
        ))}
      </div>
      <div className="tabbar"></div>
      {manufacturing.map((man, index) => (
        <div key={index}>
          <h3
            className="heading-tertiary u-margin-bottom-small globalheader"
            id={man.id}
          >
            {man.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Manufacturing;
