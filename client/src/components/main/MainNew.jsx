import React from 'react'
import MainNewSlide from './MainNewSlide';

import main from '../../assets/css/main/main.module.css'

export default function MainNew() {
  return (
    <>
      <div className={[main.main_section]}>
        <div className={main.inner}>
          <div className={main.section_title}>
            <p>New product</p>
            <span>닥터자르트의 새로운 제품을 만나보세요.</span>
          </div>
          <MainNewSlide />
        </div>
      </div>
    </>
  )
}
