import React, { useContext, useEffect } from 'react'
import ProductCard from '../src/components/ProductCard'
import ProductContext from '../context/ProductContext'
import { fetchCategory } from '../context/ProductAction'

const Jewelery = () => {

  const {products, dispatch} = useContext(ProductContext)

const getElectronics = async(category) => {
  const data = await fetchCategory(category)

  dispatch({
    type: "GET_PRODUCTS",
    payload: data,
  })
}

useEffect(() => {
  getElectronics("jewelery")
})

  
  return (
    <div className="product-container">
    <span>
    <h1 className="all-product-title">
    Must Haves
 
 </h1>
    </span>
    <h4>Some of our favourite picks this week.</h4>
 <div className="container">
    
    {
        products.map((product) => <ProductCard key={product.id} product={product}/>
        )
    }
 </div>
 </div>
  )
}

export default Jewelery
