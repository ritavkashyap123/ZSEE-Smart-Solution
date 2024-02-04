import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./home.scss";

import { FcNext } from "react-icons/fc";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439416.jpg&fm=jpg"
            alt=""
          />
          <div className="slide-text">
            <div className="title">Your Text Here</div>
            <div className="tag">Additional details or description</div>
            <Link to='/' className="link">
              Read More <FcNext style={{color: "#18C9C5"}}/>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439416.jpg&fm=jpg"
            alt=""
          />
          <div className="slide-text">
            <div className="title">Your Text Here</div>
            <div className="tag">Additional details or description</div>
            <Link to='/' className="link">
              Read More <FcNext />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439416.jpg&fm=jpg"
            alt=""
          />
          <div className="slide-text">
            <div className="title">Your Text Here</div>
            <div className="tag">Additional details or description</div>
            <Link to='/' className="link">
              Read More <FcNext />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439416.jpg&fm=jpg"
            alt=""
          />
          <div className="slide-text">
            <div className="title">Your Text Here</div>
            <div className="tag">Additional details or description</div>
            <Link to='/' className="link">
              Read More <FcNext />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439416.jpg&fm=jpg"
            alt=""
          />
          <div className="slide-text">
            <div className="title">Your Text Here</div>
            <div className="tag">Additional details or description</div>
            <Link to='/' className="link">
              Read More <FcNext />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstorm-juhaszimrus-439416.jpg&fm=jpg"
            alt=""
          />
          <div className="slide-text">
            <div className="title">Your Text Here</div>
            <div className="tag">Additional details or description</div>
            <Link to='/' className="link">
              Read More <FcNext />
            </Link>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
