"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

import "swiper/css";
import "./style.css"
import "swiper/css/pagination";

import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
const SwiperCom = () => {
  return (
    <Swiper
      effect={"coverflow"}
      slidesPerView={2}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        // depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
    </Swiper>
  );
};

export default SwiperCom;
