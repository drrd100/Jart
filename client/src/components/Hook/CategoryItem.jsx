import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import sub from '../../assets/css/sub/sub.module.css'
import { priceComma } from './PriceComma';


export default function AllItem() {
  const [item, setItem] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const callApi = async () => {
    await axios.get("/api")
      .then((res) => {
        setItem(res.data.product)
    });
    };
    callApi();
  }, []);

  return (
    item.filter(item => item.category === `${category}`).map((item) => (
        <Link to={`/ItemDetail/${item.id}`} key={item.id} className={sub.item}>
        <div className={sub.thumb}>
          <img src={item.imageURL} alt="" />
        </div>
        <div className={sub.text}>
            <p className={sub.desc}>{item.desc}</p>
            <p className={sub.name}>{item.name}</p>
            <div className={sub.price}>
                <span className={sub.normal_price}>{priceComma(item.price)}원</span>
                <span className={sub.sale_price}>{priceComma(item.sale_price)}원</span>
            </div>
        </div>
      </Link>
    ))
  )
}
