import React from "react";
import "./project.scss";
import ImpactContent from "./ImpactContent";
import { Link } from "react-router-dom";

const Project = () => {
  const { impactful, ongoing } = ImpactContent();

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
    <div className="Project">
      {/* <img src="/marwa 44.JPG" alt="" className="header-image" /> */}
      <div className="header-text"></div>
      <div className="subcategory">
        <div
          className="subcatname"
          onClick={() => handleClick("#impactful-projects")}
        >
          Impactful Projects
        </div>
        <div
          className="subcatname"
          onClick={() => handleClick("#ongoing-projects")}
        >
          Ongoing Projects
        </div>
      </div>
      <h3
        className="heading-tertiary u-margin-bottom-small globalheader"
        id="impactful-projects"
      >
        Impactful Projects
      </h3>
      <div className="project-div">
        <ul className="cards">
          {impactful.map((imp, index) => (
            <li className="cards__item" key={index}>
              <Link to={imp.link} className="card">
                <img
                  src={imp.image}
                  className="img card__image card__image--fence"
                />
                <div className="card__content">
                  <div className="card__title">{imp.title}</div>
                  <p className="card__text">{imp.para}</p>
                  <button className="btn btn--block card__btn">
                    Know more
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h3
        className="heading-tertiary u-margin-bottom-small globalheader"
        id="ongoing-projects"
      >
        Ongoing Projects
      </h3>
      <div className="project-div">
        <ul className="cards">
          {ongoing.map((ong, index) => (
            <li className="cards__item" key={index}>
              <Link to={ong.link} className="card">
                <img
                  src={ong.image}
                  className="img card__image card__image--fence"
                />
                <div className="card__content">
                  <div className="card__title">{ong.title}</div>
                  <p className="card__text">{ong.para}</p>
                  <button className="btn btn--block card__btn">
                    Know more
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
