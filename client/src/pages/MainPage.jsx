import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import MainBest from '../components/main/MainBest'
import MainCica from '../components/main/MainCica'
import MainNew from '../components/main/MainNew'
import MainPromotion from '../components/main/MainPromotion'
import MainVisual from '../components/main/MainVisual'
import ReviewSlide from '../components/main/ReviewSlide'

import '../assets/css/common/reset.css';
import SEO from '../SEO'

export default function MainPage(props) {
    

    return (
        <>
        <SEO
            title="Dr.Jart" 
            description="메인 설명"
            keywords="메인 키워드"
            imgsrc="./assets/images/og-img.png"
            url="http://3.35.230.1:3000"
        />
            <Header />
                <MainVisual />
                <MainBest />
                <MainCica />
                <MainNew />
                <MainPromotion />
                <ReviewSlide />
            <Footer/>
        </>
    
  )
}
