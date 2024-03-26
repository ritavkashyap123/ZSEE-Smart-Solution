import React from "react";
import ServicesContent from "./ServicesContent";


const Solar = () => {
  const { solar } = ServicesContent();

  const handleClick = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 200;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="Solar">
      {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
      <div className="header-text"></div>
      <div className="subcategory" style={{ flexWrap: "wrap" }}>
        {solar.map((solar, index) => (
          <div
            className="subcatname"
            onClick={() => handleClick(`#${solar.id}`)}
            key={index}
          >
            {solar.title}
          </div>
        ))}
      </div>
      <div className="tabbar"></div>
      {solar.map((solar, index) => (
        <div key={index}>
          <h3
            className="heading-tertiary u-margin-bottom-small globalheader"
            id={solar.id}
          >
            {solar.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Solar;
