import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Home from '../pages/Home'

import ProductContext, { ProductProvider } from '../context/ProductContext'
import Cart from '../pages/Cart'
import Electronics from '../pages/Electronics'
import MensClothing from '../pages/MensClothing'
import WomensClothing from '../pages/WomensClothing'
import Jewelery from '../pages/Jewelery'
import Footer from './components/Footer'
import Login from '../pages/Login'


const App = () => {
  return (
    <Router>
  <ProductProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/jewelery' element={<Jewelery/>}/>
      <Route path='/mens clothing' element={<MensClothing/>}/>
      <Route path='/womens clothing' element={<WomensClothing/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
  </ProductProvider>
    </Router>
  )
}

export default App
