import React from "react";
import ServicesContent from "./ServicesContent";


const Lightning = () => {
  const { lightning } = ServicesContent();

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
    <div className="Lighting">
      {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
      <div className="header-text"></div>
      <div className="subcategory" style={{ flexWrap: "wrap" }}>
        {lightning.map((light, index) => (
          <div
            className="subcatname"
            onClick={() => handleClick(`#${light.id}`)}
            key={index}
          >
            {light.title}
          </div>
        ))}
      </div>
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
