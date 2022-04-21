import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,Autoplay } from "swiper";
import 'swiper/css';
import main from '../../assets/css/main/main.module.css'

export default function MainVisual() {
  return (
    <>
      <Swiper
      className={main.main_visual}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      effect={"fade"}
      fadeEffect= {{crossFade:true,speed:500}}
      autoplay={{
        delay: 5000,
      }}
      modules={[EffectFade,Autoplay]}
    >
        <SwiperSlide className={[main.slide_item,main.slide_item01].join(' ')}>
          <div className={main.inner}>
            <div className={main.text}>
              <p>Pore-remedy<br/>
                Smoothing Primer
              </p>
              <strong>포어레미디 스무딩 프라이머</strong>
              <span># 모공케어</span>
            </div>
          </div>
          <div className={[main.bg,main.slide_item01].join(' ')}></div>
      </SwiperSlide>
        <SwiperSlide className={[main.slide_item,main.slide_item02].join(' ')}>
          <div className={main.inner}>
            <div className={main.text}>
              <p>Toning Light<br/>
                Cream tonifiante
              </p>
              <strong>브이세븐 토닝 라이트</strong>
              <span># 비타톤업크림</span>
            </div>
          </div>
          <div className={[main.bg,main.slide_item02].join(' ')}></div>
      </SwiperSlide>
      </Swiper>
    </>
  )
}
