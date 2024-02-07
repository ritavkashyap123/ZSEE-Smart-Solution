import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Autoplay, Pagination, Navigation } from "swiper/modules";
import "./home.scss";
import HomeContent from "./HomeContent";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const { service } = HomeContent();

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grid={{
        rows: 2,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      // navigation={{
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // }}
      breakpoints={{
        200: {
          rows: 2,
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          rows: 2,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
          rows: 2,
        },
      }}
      modules={[Grid, Pagination, Autoplay, Navigation]}
      className="service"
    >
      {service.map((service, index) => (
        <SwiperSlide key={index} className="border-top-black">
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Services;
