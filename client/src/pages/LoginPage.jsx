import { TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import login from '../../src/assets/css/user/login.module.css';
import SEO from '../SEO';

export default function LoginPage(props) {
  const [id,setId] = useState("");
  const [psword,setPsword] = useState("");
  const navagate = useNavigate();

  const handleId = (e) =>{
    setId(e.target.value)
  }
  const handlePsword = (e) =>{
    setPsword(e.target.value)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    axios.post('/users/login', null, {
      params: {
      'id': id,
      'password': psword,
      }
  })
  .then(res => {
    if(res.data.id === undefined){
        alert('입력하신 아이디가 없습니다.')
    } else if(res.data.id === null){
        alert('입력하신 비밀번호가 일치하지 않습니다.')
    } else if(res.data.id === id) {
        sessionStorage.setItem('user_id', id)
        navagate('/');
    }
})
.catch()
  }

  return (
    
    <>
    <SEO
      title="Dr.Jart" 
      description="로그인 설명"
      keywords="로그인 키워드"
      imgsrc="./assets/images/og-img.png"
      url="http://3.35.230.1:3000"
    />
      <div className={login.login_wrap}>
        <div className={login.login_contents}>
          <div className={login.login_contents_inner}>
          <div className={login.login_title}>
              <p>3배 더 강력해진 <span>3중 코어 보습</span>으로<br />
                극강의 보습력을 경험하세요.
              </p>
          </div>
            <form className={login.login_form} onSubmit={handleSubmit}>
              <TextField id="standard-basic" label="아이디" variant="standard" onChange={handleId} className={login.login_input}/>
              <TextField id="standard-basic" label="비밀번호" variant="standard" onChange={handlePsword} className={login.login_input} />
            <div className={login.btn_find}>
              <Link to="/Register">회원가입</Link>
              <Link to="/Register">아이디찾기</Link>
              <Link to="/Register">비밀번호찾기</Link>
            </div>
            <button type='submit'>로그인</button>
            </form>
          </div>  
        </div>
        <div className={login.login_bg}></div>
      </div>
    </>
  )
}
