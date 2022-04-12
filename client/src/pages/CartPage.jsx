import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function CartPage() {
  const [item, setItem] = useState([]);

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
    <>
      {item.map((item) =>
        <div key={item.id}>
          <h1>{item.id}</h1>
          <h1>{item.price}</h1>
          <h1>{item.name}</h1>
        </div>
      )}
    </>
  )
}
