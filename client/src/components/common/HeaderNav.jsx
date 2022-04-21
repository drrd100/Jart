import React from 'react'
import { Link } from 'react-router-dom'

import header from '../../assets/css/common/header.module.css';

export default function HeaderNav() {
  return (
    <>
      <div className={header.header_nav}>
        <ul className={header.nav}>
          <li>
            <Link className={header.nav_link} to="/Itemlist/all" >SHOPPING</Link>
            <div className={header.nav_list_wrap}>
              <div className={header.nav_list} >
                <Link to="/Itemlist/all">전체보기</Link>
                <Link to="/Itemlist/best">베스트</Link>
                <Link to="/Itemlist/new">신상품</Link>
                <Link to="/">라인별</Link>
               </div> 
             </div>
          </li>
          <li>
            <Link className={header.nav_link} to="/">BRAND</Link>
            <div className={header.nav_list_wrap}>
              <div className={header.nav_list} >
                <Link to="/">브랜드 소개</Link>
              </div>
          </div>
            </li>
          <li>
            <Link className={header.nav_link} to="/">EVENT</Link>
            <div className={header.nav_list_wrap}>
              <div className={header.nav_list} >
                <Link to="/">진행중인 이벤트</Link>
                <Link to="/">지난 이벤트</Link>
               </div>
            </div>
            </li>
          <li>
              <Link className={header.nav_link} to="/">REVIEW</Link>
              <div className={header.nav_list_wrap}>
              <div className={header.nav_list} >
                <Link to="/">포토리뷰</Link>
              </div>
          </div>
          </li>
          <li>
            <Link className={header.nav_link} to="/">STORY</Link>
            <div className={header.nav_list_wrap}>
            <div className={header.nav_list} >
                <Link to="/">제품 스토리</Link>
                <Link to="/">소설 채널</Link>
            </div>  
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
