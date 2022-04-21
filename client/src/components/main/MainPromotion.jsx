import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import main from '../../assets/css/main/main.module.css'
import "swiper/css";
import { Link } from 'react-router-dom';

export default function MainPromotion() {
  return (
    <>
      <div className={[main.main_section, main.pr_section].join(" ")}>
        <div className={main.inner}>
          <div className={main.section_title}>
            <p>Promotion</p>
            <span>기획상품</span>
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
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
            }}
          >
          <SwiperSlide className={main.pr_item}>
            <Link to="/ItemDetail/1"> 
                <img src="/assets/images/pr-item-01.png" alt="" />
                <div className={main.text}>
                  <p>#트러블케어</p>
                </div>
              </Link>  
            </SwiperSlide>
            <SwiperSlide className={main.pr_item}>
              <Link to="/ItemDetail/3"> 
                <img src="/assets/images/pr-item-02.png" alt="" />
                <div className={main.text}>
                  <p>#7층 고보습케어</p>
                </div>
              </Link>  
            </SwiperSlide>
            <SwiperSlide className={main.pr_item}>
              <Link to="/ItemDetail/1"> 
                <img src="/assets/images/pr-item-01.png" alt="" />
                <div className={main.text}>
                  <p>#트러블케어</p>
                </div>
              </Link>  
            </SwiperSlide>
            <SwiperSlide className={main.pr_item}>
              <Link to="/"> 
                <img src="/assets/images/pr-item-02.png" alt="" />
                <div className={main.text}>
                  <p>#7층 고보습케어</p>
                </div>
              </Link>  
            </SwiperSlide>
        </Swiper>
        </div>
      </div>
      
      
    </>
  )
}
