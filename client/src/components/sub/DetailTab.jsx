import React, { useState } from 'react'
import tab from '../../assets/css/sub/product.module.css';

import styled from "@emotion/styled";
import ReviewSlide from '../main/ReviewSlide';

 const Tabs = styled.div`
    display: flex;
    justify-content: center;
`;

 const Tab = styled.button`
  width:100%;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  font-size: 13px;
  cursor: pointer;
  border-bottom: 1px solid #000;

  border: ${props => (props.active ? "1px solid #000" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};

  :hover {
    background-color: white;
  }
`;

 const Content = styled.div`
  padding-top: 100px;
  ${props => (props.active ? "" : "display:none")}

 `;
  const Img = styled.img`
      display: block;
      max-width: 100%;
      margin: 0 auto;
  `;

export default function DetailTab() {
    const [active, setActive] = useState(0);
    const handleClick = (e) =>{
        const idx = parseInt(e.target.id);
        if(idx !== active){
            setActive(idx);
        }
    }

  return (
    <>
        <Tabs className={tab.tabs}>
            <Tab onClick={handleClick} active={active === 0} id={0}>상품상세정보</Tab>
            <Tab onClick={handleClick} active={active === 1} id={1}>구매안내</Tab>
            <Tab onClick={handleClick} active={active === 2} id={2}>상품후기</Tab>
        </Tabs>
        <Content active={active === 0}>
        <Img src="/assets/images/detail_13.jpg" alt="" />    
        </Content>
        <Content active={active === 1}>
            <Img src="/assets/images/detail_info.png" alt="" />    
        </Content>
        <Content active={active === 2} className={tab.pt0}>
            <ReviewSlide />
        </Content>
    </>
  )
}
