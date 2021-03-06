import React, { useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import aside from '../../assets/css/common/aside.module.css'

import useLoginCheck from '../Hook/useLoginCheck';

export default function Aside() {
  const isLogin = useLoginCheck()
  const loginChk = isLogin.isLogin
  const userId = sessionStorage.getItem("user_id");
  const params = useParams()

  const handleLogout = () => {
      sessionStorage.removeItem('user_id')
      document.location.href = '/'
  }
useEffect(() =>{
  let listTitle = document.getElementsByClassName(aside.list_title);
  let i;

  for (i = 0; i < listTitle.length; i++) {
    listTitle[i].addEventListener("click", (e) => {
      e.target.classList.toggle(aside.checked);
      let listItem = e.target.nextElementSibling;
      if (listItem.style.maxHeight) {
        listItem.style.maxHeight = null;
      } else {
        listItem.style.maxHeight = listItem.scrollHeight + "px";
      }
    });
  }
},[])

const handleAide = (e) =>{
  const asideWrap = document.getElementsByClassName(aside.aside_wrap).item(0);
  const deemed = document.getElementsByClassName(aside.deemed).item(0);
  document.body.classList.add(aside.stop)
  asideWrap.classList.add(aside.aside_actve)
  deemed.classList.add(aside.on)
}
const handleClose = (e) =>{
  const asideWrap = document.getElementsByClassName(aside.aside_wrap).item(0);
  const deemed = document.getElementsByClassName(aside.deemed).item(0);
  const listItem = document.getElementsByClassName(aside.list_item)
  const listTitle = document.getElementsByClassName(aside.list_title)

  document.body.classList.remove(aside.stop)
  asideWrap.classList.remove(aside.aside_actve)
  deemed.classList.remove(aside.on)
  let i 
  for(i=0; i < listItem.length; i++){
    listItem[i].style.maxHeight = null;
  }
  let j
  for(j=0; j < listItem.length; j++){
    listTitle[j].classList.remove(aside.checked)
  }
  
}
useEffect((e) => {
  handleClose();
  },[params])

  return (
    <>
      <div className={aside.deemed}></div>
      <div className={aside.aside_btn} onClick={handleAide}>
        <img src="/assets/images/aside_btn.png" alt="" />
      </div>
      <div className={aside.aside_wrap}>
        <div className={aside.close_btn} onClick={handleClose}>
          <img src="/assets/images/close.png" alt="" />
        </div>
        <div className={aside.inner}>
          <div className={aside.aside_top}>
              {loginChk ? 
              <>
                <div className={aside.user_info}>
                  <span>{userId}??? ???????????????.</span>
                  <Link to="/" onClick={handleLogout}>????????????</Link>
                </div>
                <div className={aside.user_btn}>
                  <Link to="/"><img src="/assets/images/like.png" alt="" /><span>???</span></Link>
                  <Link to="/"><img src="/assets/images/cart.png" alt="" /><span>????????????</span></Link>
                  <Link to="/"><img src="/assets/images/profile.png" alt="" /><span>???????????????</span></Link>
                </div>
              </>
              :
              <>
              <div className={aside.user_info}>
              <span>???????????? ????????????</span>
                <div>
                  <Link to="/login">?????????</Link>
                  <Link to="/register">????????????</Link>
                </div>
              </div>
              <div className={aside.user_btn}>
                <Link to="/"><img src="/assets/images/like.png" alt="" /><span>???</span></Link>
                <Link to="/"><img src="/assets/images/cart.png" alt="" /><span>????????????</span></Link>
                <Link to="/"><img src="/assets/images/profile.png" alt="" /><span>???????????????</span></Link>
              </div>
            </>
              }
          </div>
          <ul className={aside.list}>
              <li>
                <div className={aside.list_title}>
                  <div><button>??????</button><span>shopping</span></div>
                  <span className={aside.list_title_icon} ></span>
                </div>
                <ul className={aside.list_item}>
                  <li><Link to='/Itemlist/all'>????????????</Link></li>
                  <li><Link to='/Itemlist/best'>?????????</Link></li>
                  <li><Link to='/Itemlist/new'>?????????</Link></li>
                  <li><Link to='/'>?????????</Link></li>
                </ul>
              </li>
              <li>
                <div className={aside.list_title}>
                  <div><button>?????????</button><span>brand</span></div>
                  <span className={aside.list_title_icon}></span>
                </div>
                <ul className={aside.list_item}>
                  <li><Link to='/'>????????? ??????</Link></li>
                </ul>
              </li>
              <li>
                <div className={aside.list_title}>
                  <div><button>?????????</button><span>event</span></div>
                  <span className={aside.list_title_icon}></span>
                </div>
                <ul className={aside.list_item}>
                  <li><Link to='/'>???????????? ?????????</Link></li>
                  <li><Link to='/'>?????? ?????????</Link></li>
                </ul>
              </li>
              <li>
                <div className={aside.list_title}>
                  <div><button>??????</button><span>review</span></div>
                  <span className={aside.list_title_icon}></span>
                </div>
                <ul className={aside.list_item}>
                  <li><Link to='/'>??????</Link></li>
                  <li><Link to='/'>????????????</Link></li>
                </ul>
              </li>
              <li>
                <div className={aside.list_title}>
                  <div><button>?????????</button><span>story</span></div>
                  <span className={aside.list_title_icon}></span>
                </div>
                <ul className={aside.list_item}>
                  <li><Link to='/'>???????????????</Link></li>
                  <li><Link to='/'>????????????</Link></li>
                </ul>
              </li>
          </ul>
        </div>
      </div>
    </>
  )
}
