import React from "react";
import "./timeline.scss";
import TimelineContent from "./TimelineContent";
import { Link } from "react-router-dom";

const Timeline = () => {
  const {
    year2024,
    year2023,
    year2022,
    year2021,
    year2020,
    year2019,
    year2018,
  } = TimelineContent();

  return (
    <div className="Timeline">
      <img
        src="/marwa 44.JPG"
        alt=""
        className="header-image"
      />
      <div className="header-text">Timeline</div>

      <div
        className="page"
        data-uia-timeline-skin={4}
        data-uia-timeline-adapter-skin-4="ui-card-skin-#1"
      >
        <div className="uia-timeline">
          <div className="uia-timeline__container">
            <div className="uia-timeline__line" />
            <div className="uia-timeline__annual-sections">
              <span className="uia-timeline__year" aria-hidden="true">
                2024
              </span>
              <div className="uia-timeline__groups">
                {year2024.map((year, index) => (
                  <section
                    className="uia-timeline__group"
                    aria-labelledby="timeline-demo-4-heading-1"
                    key={index}
                  >
                    <Link to={year.link} className="link">
                      <div
                        className="uia-timeline__point uia-card"
                        data-uia-card-skin={1}
                        data-uia-card-mod={1}
                      >
                        <div className="uia-card__container">
                          <div className="card-main">
                            <div className="card-content">
                              <div className="uia-card__intro">
                                <h3 className="ra-heading">{year.title}</h3>
                                <span className="uia-card__time">
                                  <span className="uia-card__day">
                                    {year.date}
                                  </span>
                                </span>
                              </div>
                              <div className="uia-card__body">
                                <div className="uia-card__description">
                                  <p>{year.para}</p>
                                </div>
                              </div>
                            </div>
                            <img
                              src={year.image}
                              className="card-image"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </section>
                ))}
              </div>
            </div>
            <div className="uia-timeline__annual-sections">
              <span className="uia-timeline__year" aria-hidden="true">
                2023
              </span>
              <div className="uia-timeline__groups">
                {year2023.map((year, index) => (
                  <section
                    className="uia-timeline__group"
                    aria-labelledby="timeline-demo-4-heading-1"
                    key={index}
                  >
                    <Link to={year.link} className="link">
                      <div
                        className="uia-timeline__point uia-card"
                        data-uia-card-skin={1}
                        data-uia-card-mod={1}
                      >
                        <div className="uia-card__container">
                          <div className="card-main">
                            <div className="card-content">
                              <div className="uia-card__intro">
                                <h3 className="ra-heading">{year.title}</h3>
                                <span className="uia-card__time">
                                  <span className="uia-card__day">
                                    {year.date}
                                  </span>
                                </span>
                              </div>
                              <div className="uia-card__body">
                                <div className="uia-card__description">
                                  <p>{year.para}</p>
                                </div>
                              </div>
                            </div>
                            <img
                              src={year.image}
                              className="card-image"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </section>
                ))}
              </div>
            </div>
            <div className="uia-timeline__annual-sections">
              <span className="uia-timeline__year" aria-hidden="true">
                2022
              </span>
              <div className="uia-timeline__groups">
                {year2022.map((year, index) => (
                  <section
                    className="uia-timeline__group"
                    aria-labelledby="timeline-demo-4-heading-1"
                    key={index}
                  >
                    <Link to={year.link} className="link">
                      <div
                        className="uia-timeline__point uia-card"
                        data-uia-card-skin={1}
                        data-uia-card-mod={1}
                      >
                        <div className="uia-card__container">
                          <div className="card-main">
                            <div className="card-content">
                              <div className="uia-card__intro">
                                <h3 className="ra-heading">{year.title}</h3>
                                <span className="uia-card__time">
                                  <span className="uia-card__day">
                                    {year.date}
                                  </span>
                                </span>
                              </div>
                              <div className="uia-card__body">
                                <div className="uia-card__description">
                                  <p>{year.para}</p>
                                </div>
                              </div>
                            </div>
                            <img
                              src={year.image}
                              className="card-image"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </section>
                ))}
              </div>
            </div>
            <div className="uia-timeline__annual-sections">
              <span className="uia-timeline__year" aria-hidden="true">
                2021
              </span>
              <div className="uia-timeline__groups">
                {year2021.map((year, index) => (
                  <section
                    className="uia-timeline__group"
                    aria-labelledby="timeline-demo-4-heading-1"
                    key={index}
                  >
                    <Link to={year.link} className="link">
                      <div
                        className="uia-timeline__point uia-card"
                        data-uia-card-skin={1}
                        data-uia-card-mod={1}
                      >
                        <div className="uia-card__container">
                          <div className="card-main">
                            <div className="card-content">
                              <div className="uia-card__intro">
                                <h3 className="ra-heading">{year.title}</h3>
                                <span className="uia-card__time">
                                  <span className="uia-card__day">
                                    {year.date}
                                  </span>
                                </span>
                              </div>
                              <div className="uia-card__body">
                                <div className="uia-card__description">
                                  <p>{year.para}</p>
                                </div>
                              </div>
                            </div>
                            <img
                              src={year.image}
                              className="card-image"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </section>
                ))}
              </div>
            </div>
            <div className="uia-timeline__annual-sections">
              <span className="uia-timeline__year" aria-hidden="true">
                2020
              </span>
              <div className="uia-timeline__groups">
                {year2020.map((year, index) => (
                  <section
                    className="uia-timeline__group"
                    aria-labelledby="timeline-demo-4-heading-1"
                    key={index}
                  >
                    <Link to={year.link} className="link">
                      <div
                        className="uia-timeline__point uia-card"
                        data-uia-card-skin={1}
                        data-uia-card-mod={1}
                      >
                        <div className="uia-card__container">
                          <div className="card-main">
                            <div className="card-content">
                              <div className="uia-card__intro">
                                <h3 className="ra-heading">{year.title}</h3>
                                <span className="uia-card__time">
                                  <span className="uia-card__day">
                                    {year.date}
                                  </span>
                                </span>
                              </div>
                              <div className="uia-card__body">
                                <div className="uia-card__description">
                                  <p>{year.para}</p>
                                </div>
                              </div>
                            </div>
                            <img
                              src={year.image}
                              className="card-image"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </section>
                ))}
              </div>
            </div>
            <div className="uia-timeline__annual-sections">
              <span className="uia-timeline__year" aria-hidden="true">
                2019
              </span>
              <div className="uia-timeline__groups">
                {year2019.map((year, index) => (
                  <section
                    className="uia-timeline__group"
                    aria-labelledby="timeline-demo-4-heading-1"
                    key={index}
                  >
                    <Link to={year.link} className="link">
                      <div
                        className="uia-timeline__point uia-card"
                        data-uia-card-skin={1}
                        data-uia-card-mod={1}
                      >
                        <div className="uia-card__container">
                          <div className="card-main">
                            <div className="card-content">
                              <div className="uia-card__intro">
                                <h3 className="ra-heading">{year.title}</h3>
                                <span className="uia-card__time">
                                  <span className="uia-card__day">
                                    {year.date}
                                  </span>
                                </span>
                              </div>
                              <div className="uia-card__body">
                                <div className="uia-card__description">
                                  <p>{year.para}</p>
                                </div>
                              </div>
                            </div>
                            <img
                              src={year.image}
                              className="card-image"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </section>
                ))}
              </div>
            </div>
            <div className="uia-timeline__annual-sections">
              <span className="uia-timeline__year" aria-hidden="true">
                2018
              </span>
              <div className="uia-timeline__groups">
                {year2018.map((year, index) => (
                  <section
                    className="uia-timeline__group"
                    aria-labelledby="timeline-demo-4-heading-1"
                    key={index}
                  >
                    <Link to={year.link} className="link">
                      <div
                        className="uia-timeline__point uia-card"
                        data-uia-card-skin={1}
                        data-uia-card-mod={1}
                      >
                        <div className="uia-card__container">
                          <div className="card-main">
                            <div className="card-content">
                              <div className="uia-card__intro">
                                <h3 className="ra-heading">{year.title}</h3>
                                <span className="uia-card__time">
                                  <span className="uia-card__day">
                                    {year.date}
                                  </span>
                                </span>
                              </div>
                              <div className="uia-card__body">
                                <div className="uia-card__description">
                                  <p>{year.para}</p>
                                </div>
                              </div>
                            </div>
                            <img
                              src={year.image}
                              className="card-image"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
