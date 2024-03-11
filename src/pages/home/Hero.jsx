import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./home.scss";
import HomeContent from "./HomeContent";

import { FcNext } from "react-icons/fc";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Hero = () => {
  const { hero } = HomeContent();
  return (
    // <div className="Hero">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="hero"
      >
        {hero.map((hero, index) => (
          <SwiperSlide key={index}>
            <img src={hero.image} alt="" />
            <div className="slide-text">
              <div className="title">{hero.title}</div>
              <div className="tag">{hero.para}</div>
              {/* <Link to={hero.link} className="link">
                Read More <FcNext style={{ color: "#18C9C5" }} />
              </Link> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    // </div>
  );
};

export default Hero;
