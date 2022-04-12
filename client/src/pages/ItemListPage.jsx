import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import SubItemList from '../components/sub/SubItemList'
import SubVisual from '../components/sub/SubVisual'

export default function ItemlistPage() {
  return (
    <>
      <Header />
      <SubVisual />
      <SubItemList/> 
      <Footer />
    </>
  )
}
