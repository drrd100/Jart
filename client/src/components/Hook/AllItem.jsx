import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import sub from '../../assets/css/sub/sub.module.css'

export default function AllItem() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const callApi = async () => {
    await axios.get("/api/api")
      .then((res) => {
        setItem(res.data.product)
    });
    };
    callApi();
  }, []);

  return (
    item.map((item) => (
        <Link to={`/ItemDetail/${item.id}`} key={item.id} className={sub.item}>
        <div className={sub.thumb}>
          <img src={item.imageURL} alt="" />
        </div>
        <div className={sub.text}>
            <p className={sub.desc}>{item.desc}</p>
            <p className={sub.name}>{item.name}</p>
            <div className={sub.price}>
                <span className={sub.normal_price}>{item.price}원</span>
                <span className={sub.sale_price}>{item.sale_price}원</span>
            </div>
        </div>
      </Link>
    ))
  )
}
