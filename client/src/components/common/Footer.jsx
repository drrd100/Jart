import React from 'react'
import { Link } from 'react-router-dom';

import footer from '../../assets/css/common/footer.module.css';

// import logo from '../../assets/images/top-logo.png';
// import icon_kakao from '../../assets/images/icon-kakao.png';
// import icon_twitter from '../../assets/images/icon-twitter.png';
// import icon_youtube from '../../assets/images/icon-youtube.png';
// import icon_insta from '../../assets/images/icon-instagram.png';


export default function Footer() {
  return (
    <>
    <div className={[footer.footer_wrap, footer.wrap].join(" ")}>
      <div className={footer.inner}>
        <div className={footer.footer_top}>
          <ul className={footer.location}>
            <li><Link to="/">회사소개</Link></li>
            <li><Link to="/">이용약관</Link></li>
            <li><Link to="/">개인정보처리방침</Link></li>
            <li><Link to="/">고객만족센터</Link></li>
          </ul>
          <div className={footer.sns}>
              <ul>
                <li><Link to="/"><img src="/assets/images/icon-kakao.png" alt="icon_kakao" /></Link></li>
                <li><Link to="/"><img src="/assets/images/icon-twitter.png" alt="icon_twitter" /></Link></li>
                <li><Link to="/"><img src="/assets/images/icon-youtube.png" alt="icon_youtube" /></Link></li>
                <li><Link to="/"><img src="/assets/images/icon-instagram.png" alt="icon_insta" /></Link></li>
              </ul>
          </div>
        </div>
        
        <div className={footer.footer_bottom}>
          <div className={footer.info}>
            <div className={footer.logo}><img src="/assets/images/top-logo.png" alt="logo" /></div>
            <div className={footer.desc}>
              <p>서울특별시 강남구 역삼동 769-8 엠스페이스빌딩, 도로명 주소 ( 서울특별시 강남구 논현로72길 13 M-SPACE 빌딩 해브앤비 ) 대표이사 : 크리스토퍼 킨더슬리 우드</p>
              <p>상호명 : 해브앤비(주) 사업자 등록번호 : 214-87-63681 통신판매업 신고번호 : 2008 서울 강남-2284호 </p>
              <p>개인정보관리책임자 : 엄정식 팀장 고객만족센터 : 1544-5453 ( 운영시간 : 09:00~18:00, 점심시간 : 12:50~14:00 ) FAX : 02-3462-9051</p>
              <p>전자우편주소 : webmaster@drjart.com</p>
              <p>Copyrightⓒ Have&Be co., Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}
