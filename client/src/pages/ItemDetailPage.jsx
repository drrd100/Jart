import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import detail from '../assets/css/sub/product.module.css';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import DetailTab from '../components/sub/DetailTab';
import SEO from '../SEO';



export default function ItemDetailPage() {
  const [number, setNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState();
  const [item, setItem] = useState([]);
  const {id} = useParams();
  

  useEffect(() => {
    const callApi = async () => {
    await axios.get("/api")
      .then((res) => {
        setItem(res.data.product[`${id}`])
        setTotalPrice(res.data.product[`${id}`].sale_price)
    });
    };
    callApi();
  },[]);

  const increase = () => {
    setNumber(number + 1);
    setTotalPrice(totalPrice + item.sale_price)
  }
  const decrease = () => {
    if(number > 1 ){
      setNumber(number - 1);
      setTotalPrice(totalPrice - item.sale_price)
    }
  }

  return (
    <>
    <SEO
      title="Dr.Jart" 
      description="아이템디테일 설명"
      keywords="아이템디테일 키워드"
      imgsrc="./assets/images/og-img.png"
      url="http://3.35.230.1:3000"
    />
    <Header />
      <div className={detail.detail_wrap}>
        <div className={detail.inner}>
        <div className={detail.detail_top}>
          <div className={detail.thumb}>
            <img src={item.detail_image_thumb} alt="" />  
          </div>  
          <div className={detail.info_area}>
            <div className={detail.info}>
              <p className={detail.name}>{item.name}</p>  
              <p className={detail.price}>{item.sale_price}원</p>
              <p className={detail.deilvery}>배송비 4,000원</p>
            </div>
            <div className={detail.product_select}>
              <p>{item.name}</p>  
              <div className={detail.count}>
                <span>{number}</span>
                <div className={detail.count_btn}>
                  <button onClick={increase}></button>
                  <button onClick={decrease}></button>
                </div>
              </div>
              <p>{totalPrice}원</p>
            </div>
            <div className={detail.total}>
              <span>TOTAL</span>
              <span>{totalPrice}원</span>  
            </div>
            <div className={detail.order_btn_list}>
                <button className={detail.action}>바로 구매하기</button>
                <div>
                  <button>장바구니</button>
                  <button>찜하기</button>
                </div>
            </div>
          </div>  
        </div>
        <DetailTab />
        </div>
      </div>
      <Footer />
    </>
  )
}
