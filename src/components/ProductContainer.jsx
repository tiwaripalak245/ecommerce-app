import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import { useLinkClickHandler } from 'react-router-dom'
import ProductContext from '../../context/ProductContext'
import { fetchProducts } from '../../context/ProductAction'
import product from '../assets/product.png'

const ProductContainer = () => {

    const {products, dispatch} = useContext(ProductContext)

    const getProducts = async() => {
        const data = await fetchProducts();

        dispatch({
            type: "GET_PRODUCTS",
            payload: data,
        })
    }

    useEffect(() => {
getProducts()
    },[])
  return (
    <> 
    <div className="product-container">
   <span>
    {/* <img src={product} alt="" /> */}
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
</>

  )
}

export default ProductContainer
