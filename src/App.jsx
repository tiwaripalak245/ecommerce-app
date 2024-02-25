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
import Wish from '../pages/Wish'
import ProductDetail from './components/ProductDetail'
import Register from '../pages/Register'
import ProductContainer from './components/ProductContainer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {





  return (
    <Router>
  <ProductProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wish' element={<Wish/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/jewelery' element={<Jewelery/>}/>
      <Route path='/mens clothing' element={<MensClothing/>}/>
      <Route path='/womens clothing' element={<WomensClothing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
<Route path = "/productcontainer" element={<ProductContainer/>}/>
      <Route path='/productdetail/:ID' element={<ProductDetail/>}/>
    </Routes>
    <Footer/>
  </ProductProvider>
  <ToastContainer/>
    </Router>
  )
}

export default App
