import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import HomeContent from "./HomeContent";

import "./home.scss";
import { Link } from "react-router-dom";

const HomeProject = () => {
  const { impact } = HomeContent();

  return (
    // <div className="HomeProject">
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="impact"
      >
        {impact.map((impact, index) => (
          <SwiperSlide key={index}>
            <Link to={impact.link} className="card card--1">
              <img
                src={impact.image}
                className="card__img"
              />
              <Link to={impact.link} className="card_link">
                <img
                  src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  className="card__img--hover"
                />
              </Link>
              <div className="card__info">
                <h3 className="card__title">
                  {impact.title}
                </h3>
                <p className="card__category">{impact.category}</p>
                <span className="card__by">
                  <Link to={impact.link} className="card__author">
                    Read More
                  </Link>
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    // </div>
  );
};

export default HomeProject;
