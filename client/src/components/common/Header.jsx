import React, { useEffect } from 'react';
import HeaderNav from './HeaderNav';
import HeaderTop from './HeaderTop';

import header from '../../assets/css/common/header.module.css';



export default function Header() {

  const scrollDown = () =>{
    const scrollTop = document.documentElement.scrollTop;
    const headerWrap = document.getElementById("header");
    if(scrollTop > 100){
      headerWrap.classList.add(`${header.scroll_down}`);
    }else{
      headerWrap.classList.remove(`${header.scroll_down}`);
    }
  }
  document.addEventListener('scroll', function() {
    scrollDown();
  });

  useEffect(() =>{
    const URL = window.location.pathname.replace(/[0-9]/g, "")
    const headerWrap = document.getElementsByClassName(header.header_wrap).item(0);
      if(URL === "/ItemDetail/"){
        headerWrap.classList.add(header.sub_header);
      }
  })

  return (
    <>
      <div className={header.header_wrap} id="header">
        <div className={header.inner}>
          <HeaderTop />
          <HeaderNav />
          
        </div>
      </div>
      
    </>
  )
}
