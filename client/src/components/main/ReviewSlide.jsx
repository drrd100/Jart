import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import aixos from 'axios';
import main from '../../assets/css/main/main.module.css'
import "swiper/css";

export default function ReviewSlide() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const callApi = async () =>  {
      aixos.get("/review").then((res) => {
        setData(res.data.review);
      })
    }
    callApi()
  },[])

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
          {data && data.map((data) => (
            <SwiperSlide key={data.id}>
              <div className={main.review_item}>
                    <div className={main.thumb}>
                      <img src={data.thumb} alt="" />
                    </div>
                    <div className={main.text}>
                        <div className={main.info}>
                            <span className={main.pr_name}>{data.pr_name}</span>
                            <ul className={main.star}>
                                <li><img src="/assets/images/star.png" alt="" /></li>
                                <li><img src="/assets/images/star.png" alt="" /></li>
                                <li><img src="/assets/images/star.png" alt="" /></li>
                                <li><img src="/assets/images/star.png" alt="" /></li>
                                <li><img src="/assets/images/star.png" alt="" /></li>
                            </ul>
                        </div>
                        <div className={main.summary}>
                            <p className={main.title}>{data.title}</p>
                            <p className={main.desc}>{data.desc}</p>
                        </div>
                        <div className={main.author}>
                            <span className={main.user}>{data.user}</span>
                            <span className={main.date}>{data.date}</span>
                        </div>
                    </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </>
  )
}
