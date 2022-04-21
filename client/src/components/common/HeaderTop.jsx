import React from 'react'
import { Link } from 'react-router-dom'
import header from '../../assets/css/common/header.module.css';
import useLoginCheck from '../Hook/useLoginCheck';

export default function HeaderTop() {
  const isLogin = useLoginCheck()
  const loginChk = isLogin.isLogin
  
  const handleLogout = () => {
    // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
      sessionStorage.removeItem('user_id')
      // App 으로 이동(새로고침)
      document.location.href = '/'
  }

  return (
    <>
      <div className={header.header_top}>
        <div className={header.top_logo}>
             <Link to="/"></Link>
        </div>
        <div className={header.top_logo_scroll}>
             <Link to="/"></Link>
        </div>
        {loginChk ? 
          <ul className={header.right}>
            <li><Link to="/" onClick={handleLogout}>로그아웃</Link></li>
            <li><Link to="/Cart">장바구니</Link></li>
            <li><Link to="/">마이페이지</Link></li>
          </ul>
        :
          <ul className={header.right}>
            <li><Link to="/Login">로그인</Link></li>
            <li><Link to="/Register">회원가입</Link></li>
            <li><Link to="/">장바구니</Link></li>
            <li><Link to="/">마이페이지</Link></li>
          </ul>
        }
      </div>
    </>
  )
}
