import React from "react";
import "./project.scss";
import ImpactContent from "./ImpactContent";
import { Link } from "react-router-dom";

const Project = () => {
  const { impact } = ImpactContent();

  return (
    <div className="Project">
      <img
        src="/marwa 44.JPG"
        alt=""
        className="header-image"
      />
      <div className="header-text">Project</div>
      <ul className="cards">
      {impact.map((impact, index) => (
        <li className="cards__item" key={index}>
          <Link to={impact.link} className="card">
            <img src={impact.image} className="img card__image card__image--fence" />
            <div className="card__content">
              <div className="card__title">{impact.title}</div>
              <p className="card__text">
                {impact.para}
              </p>
              <button className="btn btn--block card__btn">Know more</button>
            </div>
          </Link>
        </li>
        ))}

      </ul>
    </div>
  );
};

export default Project;
