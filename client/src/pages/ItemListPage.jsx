import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import SubItemList from '../components/sub/SubItemList'
import SubVisual from '../components/sub/SubVisual'
import SEO from '../SEO'

export default function ItemlistPage() {
  return (
    <>
        <SEO
          title="Dr.Jart" 
          description="아이템리스트 설명"
          keywords="아이템리스트 키워드"
          imgsrc="./assets/images/og-img.png"
          url="http://3.35.230.1:3000"
        />
      <Header />
      <SubVisual />
      <SubItemList/> 
      <Footer />
    </>
  )
}
