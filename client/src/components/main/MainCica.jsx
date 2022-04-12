import React,{useEffect, useState} from 'react'
import css from '../../assets/css/main/main.module.css'

// import cica_img from '../../assets/images/cica-bg-item.png'
// import logo from '../../assets/images/logo_white.png';

export default function MainCica() {
  const [position, setPosition] = useState(0);
  const windowWidth = window.innerWidth;
  
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
   
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  });

  return (
    <>
      <div className={css.cicaWrap}
           style={{ backgroundPositionY: position / 4 -300 }}>
        <div className={css.cica_image} >
          <img src="/assets/images/cica-bg-item.png" alt="" style={windowWidth > 580 ? {opacity:(position -700 ) / 80} : {opacity:(position -400 ) / 80}}/>
        </div>
        <div className={css.text} style={windowWidth > 580 ? {opacity:(position -800 ) / 80} : {opacity:(position -500 ) / 80}}>
          <div>
            <img src="/assets/images/logo_white.png" alt="" />
            <p>
              시카페어 초록의 힘과<br/>
              더마톨로지 케어로<br/>
              민감해진 피부를 긴급 케어하세요
            </p>
            <button>cicapair more</button>
          </div>
        </div>
      </div>
    </>
  )
}
