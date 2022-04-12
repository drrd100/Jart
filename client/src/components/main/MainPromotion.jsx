import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import main from '../../assets/css/main/main.module.css'
import "swiper/css";

export default function MainPromotion() {
  return (
    <>
      <div className={[main.main_section, main.pr_section].join(" ")}>
        <div className={main.inner}>
          <div className={main.section_title}>
            <p>Promotion</p>
            <span>프로모션</span>
          </div>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            loop={true}
            className={main.pr_wrap}
            breakpoints={{
              480: {
                slidesPerView:1.4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.4,
                spaceBetween: 20,
              },
            }}
          >
          <SwiperSlide className={main.pr_item}>
                <img src="/assets/images/pr-item-01.png" alt="" />
                <div className={main.text}>
                  <p>#트러블케어</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={main.pr_item}>
                <img src="/assets/images/pr-item-02.png" alt="" />
                <div className={main.text}>
                  <p>#7층 고보습케어</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={main.pr_item}>
                <img src="/assets/images/pr-item-01.png" alt="" />
                <div className={main.text}>
                  <p>#트러블케어</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={main.pr_item}>
                <img src="/assets/images/pr-item-02.png" alt="" />
                <div className={main.text}>
                  <p>#7층 고보습케어</p>
                </div>
            </SwiperSlide>
          
        </Swiper>
        </div>
      </div>
      
      
    </>
  )
}
