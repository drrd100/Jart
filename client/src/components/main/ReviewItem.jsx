import React from 'react'
// import reviewItem from '../../assets/images/review-item.png'
// import iconStar from '../../assets/images/star.png'
import main from '../../assets/css/main/main.module.css'
import "swiper/css";


export default function ReviewItem() {
  return (
    <div className={main.review_item}>
          <div className={main.thumb}>
            <img src="/assets/images/review-item.png" alt="" />
          </div>
          <div className={main.text}>
              <div className={main.info}>
                  <span className={main.pr_name}>시시카케어시카케어시카케어시카케어시카케어시카케어카케어</span>
                  <ul className={main.star}>
                      <li><img src="/assets/images/star.png" alt="" /></li>
                      <li><img src="/assets/images/star.png" alt="" /></li>
                      <li><img src="/assets/images/star.png" alt="" /></li>
                      <li><img src="/assets/images/star.png" alt="" /></li>
                      <li><img src="/assets/images/star.png" alt="" /></li>
                 </ul>
              </div>
              <div className={main.summary}>
                  <p className={main.title}>트러블케어에 진짜 효과적이예요.트러블케어에트러블케어에</p>
                  <p className={main.desc}>트러블케어에 진짜 효과적이예요.트러블케어에 진짜 효과적이예요.트러블케어에 진짜 효과적이예요.트러블케어에 진짜 효과적이예요</p>
              </div>
              <div className={main.author}>
                  <span className={main.user}>양홍양홍열양홍열양홍열양홍열양홍열열</span>
                  <span className={main.date}>2021.12.12</span>
              </div>
          </div>
    </div>
  )
}
