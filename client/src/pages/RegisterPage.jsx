import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import register from '../../src/assets/css/user/register.module.css';
import { TextField } from '@material-ui/core';
import SEO from '../SEO';


export default function Register() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    if(id === ""){
      alert("아이디를 입력해주세요.")
    }else if(name === ""){
      alert("이름을 입력해주세요.")
    }else if(password === ""){
      alert("비밀번호를 입력해주세요.")
    }else if(confPassword === ""){
      alert("비밀번호 확인을 입력해주세요.")
    }else if(password !== confPassword){
      alert("비밀번호가 일치하지 않습니다.")
    }
    try {
      console.log(id,password,confPassword);
      console.log("버튼클릭");
      await axios.post('/users/register',null, {
        params: {
          'id': id,
          'name':name,
          'password': password,
          }
      })
        .then(res =>{
          console.log(res.data.success);
          console.log(res.data.err);
          if(res.data.success === true){
            alert("회원가입이 완료되었습니다.")
            navigate("/Login");
          }
        })
    } catch (err) {
        if (err.res) {
            setMsg(err.res.data.msg);
        }
    }
    
}

  return (
    <>
    <SEO
      title="Dr.Jart" 
      description="회원가입 설명"
      keywords="회원가입 키워드"
      imgsrc="./assets/images/og-img.png"
      url="http://3.35.230.1:3000"
    />
      <div className={register.register_wrap}>
        <div className={register.register_contents}>
          <div className={register.register_contents_inner}>
            <div className={register.register_title}>
              <p>회원가입 {msg}</p>
            </div>
            <form className={register.register_form} onSubmit={Register}>
              <TextField id="standard-basic" label="아이디" variant="standard" className={register.register_input} onChange={(e) => setId(e.target.value)}/>
              <TextField id="standard-basic" label="이름" variant="standard" className={register.register_input} onChange={(e) => setName(e.target.value)}/>
              <TextField id="standard-basic" label="비밀번호" variant="standard" className={register.register_input} onChange={(e) => setPassword(e.target.value)}/>
              <TextField id="standard-basic" label="비밀번호 확인" variant="standard" className={register.register_input} onChange={(e) => setConfPassword(e.target.value)}/>
              <button type='submit' className={register.submit_btn}>가입하기</button>
            </form>
          </div>  
        </div>
        <div className={register.register_bg}></div>
      </div>
    </>
  )
}
