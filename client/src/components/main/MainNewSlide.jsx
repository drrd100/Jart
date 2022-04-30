import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import { Pagination } from "swiper";
import css from '../../assets/css/main/main.module.css';
import { Link } from 'react-router-dom';
import { priceComma } from '../Hook/PriceComma';


export default function MainNewSlide() {
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
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={css.topseller_slide}
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
        {item.filter(item => item.category === "new").map((item) => (
          <SwiperSlide className={css.slide_item} key={item.id}>
            <Link to={`/ItemDetail/${item.id}`} >
            <div className={css.thumb}>
              <img src={item.imageURL} alt="" />
            </div>
            <div className={css.text}>
                <p className={css.desc}>{item.desc}</p>
                <p className={css.name}>{item.name}</p>
                <div className={css.price}>
                    <span className={css.normal_price}>{priceComma(item.price)}원</span>
                    <span className={css.sale_price}>{priceComma(item.sale_price)}원</span>
                </div>
            </div>
          </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}