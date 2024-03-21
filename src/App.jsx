import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

import { ProductProvider } from '../context/ProductContext'
import Cart from '../pages/Cart'
import Electronics from '../pages/Electronics'
import MensClothing from '../pages/MensClothing'
import WomensClothing from '../pages/WomensClothing'
import Jewelery from '../pages/Jewelery'
import Footer from './components/Footer'
import Wish from '../pages/Wish'
import ProductDetail from './components/ProductDetail'
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
