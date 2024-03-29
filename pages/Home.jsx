import React, { useEffect } from 'react'
import HeroSection from '../src/components/HeroSection'
import ProductContainer from '../src/components/ProductContainer'

import NewsLetter from '../src/components/NewsLetter'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
