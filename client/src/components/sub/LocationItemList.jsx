import React from 'react'
import sub from '../../assets/css/sub/sub.module.css'
import { Link } from 'react-router-dom'

export default function LocationItemList() {
  return (
    <>
        <div className={sub.LocationItemList}>
          <Link to="/Itemlist/all">전체보기</Link>
          <Link to="/Itemlist/best">베스트</Link>
          <Link to="/Itemlist/new">신상품</Link>
          <Link to="/">라인별</Link>
        </div>
    </>
  )
}
