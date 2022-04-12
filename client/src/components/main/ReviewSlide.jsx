import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import main from '../../assets/css/main/main.module.css'
import "swiper/css";
import ReviewItem from './ReviewItem';

export default function ReviewSlide() {
  return (
    <>
      <div className={[main.main_section]}>
        <div className={main.inner}>
          <div className={main.section_title}>
            <p>Review</p>
            <span>리뷰</span>
          </div>
          <Swiper
            slidesPerView={2.2}
            spaceBetween={10}
            loop={true}
            className={main.review_wrap}
            breakpoints={{
              480: {
                slidesPerView:3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
          <SwiperSlide><ReviewItem /></SwiperSlide>
          <SwiperSlide><ReviewItem /></SwiperSlide>
          <SwiperSlide><ReviewItem /></SwiperSlide>
          <SwiperSlide><ReviewItem /></SwiperSlide>
          <SwiperSlide><ReviewItem /></SwiperSlide>
        </Swiper>
        </div>
      </div>
    </>
  )
}
