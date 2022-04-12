import React from 'react'
import sub from '../../assets/css/sub/sub.module.css'
import { useParams } from 'react-router-dom';
import AllItem from '../Hook/AllItem';
import CategoryItem from '../Hook/CategoryItem';


export default function SubItemList() {
  const { category } = useParams();
  
  return (
    <>
        <div className={sub.list_page}>
            <div className={sub.inner}>
                <div className={sub.title}>
                    <p>{category}</p>
                </div>
                <div className={sub.list}>
                {category === "all"
                ?<AllItem />
                :<CategoryItem/>
                }
                </div>
            </div>
        </div>
    </>
  )
}
