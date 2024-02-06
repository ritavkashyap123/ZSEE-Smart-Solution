import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Autoplay, Pagination, Navigation } from "swiper/modules";
import "./home.scss";
import HomeContent from "./HomeContent";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const options = ["blue", "yellow", "green"];

const getRandomOption = (index) => {
  const colorIndex = index % options.length;
  return options[colorIndex];
};

const Services = () => {
  // const randomOption = getRandomOption();
  const { service } = HomeContent();
  return (
    <Swiper
      slidesPerView={3}
      grid={{
        rows: 2,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination, Autoplay, Navigation]}
      className="service"
    >
      {service.map((service, index) => (
        <SwiperSlide key={index}>
          <Link
            to={service.link}
            className={`Card border-top-${getRandomOption(index)}`}
          >
            <img src={service.image} alt="" />
            <h2>{service.title}</h2>
            <p>{service.para}</p>
            <br />
            <div className="explore-btn">
              <Link to={service.link} className={`${getRandomOption(index)}`}>
                Explore <FaArrowRight />
              </Link>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Services;
