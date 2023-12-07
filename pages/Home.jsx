import React from 'react'
import HeroSection from '../src/components/HeroSection'
import ProductContainer from '../src/components/ProductContainer'
import Footer from '../src/components/Footer'
import Cart from './Cart'
import NewsLetter from '../src/components/NewsLetter'

const Home = () => {
  return (
    <>
    <HeroSection/>  
    <ProductContainer/>
    <NewsLetter/>
    </>
  )
}

export default Home
