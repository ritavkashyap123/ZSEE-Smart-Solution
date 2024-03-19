import React from "react";
import ServicesContent from "./ServicesContent";

const Water = () => {
  const { water } = ServicesContent();

  const handleClick = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Water">
      {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
      <div className="header-text"></div>
      <div className="subcategory" style={{ flexWrap: "wrap" }}>
        {water.map((water, index) => (
          <div
            className="subcatname"
            onClick={() => handleClick(`#${water.id}`)}
            key={index}
          >
            {water.title}
          </div>
        ))}
      </div>
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
