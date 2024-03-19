import React from "react";
import ServicesContent from "./ServicesContent";


const Manufacturing = () => {
  const { manufacturing } = ServicesContent();

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
    <div className="Manufacturing">
      {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
      <div className="header-text"></div>
      <div className="subcategory" style={{ flexWrap: "wrap" }}>
        {manufacturing.map((man, index) => (
          <div
            className="subcatname"
            onClick={() => handleClick(`#${man.id}`)}
            key={index}
          >
            {man.title}
          </div>
        ))}
      </div>
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
