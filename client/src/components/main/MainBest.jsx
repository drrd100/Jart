import React from 'react'
import MainBestSlide from './MainBestSlide';

import main from '../../assets/css/main/main.module.css'

export default function MainBest() {

  return (
    <>
      <div className={[main.main_section]}>
        <div className={main.inner}>
          <div className={main.section_title}>
            <p>Top Seller</p>
            <span>가장 사랑받는 제품을 만나보세요.</span>
          </div>
          <MainBestSlide />
        </div>
      </div>
    </>
  )
}
