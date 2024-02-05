import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


import { Grid, Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./home.scss";
import Card from '../../components/cards/Card';

const Services = () => {
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
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}

      modules={[Grid, Pagination, Autoplay, Navigation]}
      className="service"
    >
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
    </Swiper>
  );
};

export default Services;
