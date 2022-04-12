import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import { Pagination } from "swiper";
import main from '../../assets/css/main/main.module.css';
import { Link } from 'react-router-dom';


export default function MainItemSlide() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const callApi = async () => {
    await axios.get("/api")
      .then((res) => {
        setItem(res.data.product)
    });
    };
    callApi();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={2.4}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={main.topseller_slide}
        breakpoints={{
          480: {
            slidesPerView:3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {item.filter(item => item.category === "best").map((item) => (
          <SwiperSlide className={main.slide_item} key={item.id}>
            <Link to={`/ItemDetail/${item.id}`}>
            <div className={main.thumb}>
              <img src={item.imageURL} alt="" />
            </div>
            <div className={main.text}>
                <p className={main.desc}>{item.desc}</p>
                <p className={main.name}>{item.name}</p>
                <div className={main.price}>
                    <span className={main.normal_price}>{item.price}원</span>
                    <span className={main.sale_price}>{item.sale_price}원</span>
                </div>
            </div>
          </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
