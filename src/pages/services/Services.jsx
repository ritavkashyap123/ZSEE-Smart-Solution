import React from "react";
import "./services.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ServicesContent from "./ServicesContent";

const Services = () => {
  const { service } = ServicesContent();
  return (
    <div className="Services">
      <img
        src="/marwa 44.JPG"
        alt=""
        className="header-image"
      />
      <div className="header-text">Our Services</div>
      {service.map((service, index) => (
        <div className="service-div">
          <div key={index} className="border-top-black">
            <Link to={service.link} className="Card">
              <img src={service.image} alt="" />
              <h2>{service.title}</h2>
              <p>{service.para}</p>
              <div className="explore-btn">
                <Link to={service.link} className="black">
                  Explore <FaArrowRight />
                </Link>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
