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

export default function MainPage(props) {
    return (
        <>
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
