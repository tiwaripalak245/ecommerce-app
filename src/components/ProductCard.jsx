import React, { useContext } from 'react'
import ProductContext from '../../context/ProductContext'

const ProductCard = ({product}) => {

  const {dispatch} = useContext(ProductContext)
  const handleAdd =(id) => {

    dispatch({
      type: "ADD_ITEMS",
      payload: product,
    })

  }
   
  return (
    <div className='product'>
    <img src={product.image} alt="" />
    <h1>{product.title}</h1>
    {/* <p>{product.description}</p> */}
      <h3>Price:${product.price}</h3>
  
    <button className='add_cart' onClick={() => handleAdd(product)}>Add to Cart</button>

  </div>
  )
}

export default ProductCard
