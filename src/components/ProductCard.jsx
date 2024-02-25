import React, { useContext } from 'react'
import ProductContext from '../../context/ProductContext'
import Cart from '../../pages/Cart'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductCard = ({product}) => {

  const {productItem, dispatch} = useContext(ProductContext)
  
const addtoWishlist = (wishproduct) => {
  dispatch({
    type: "ADD_TO_WISHLIST",
    payload: product,
  })
 toast.info("item wishlisted!!")
}

const handleAdd =(selectitem) => {

  dispatch({
    type: "ADD_ITEMS",
    payload: {product: selectitem, itemQuantity: 1 }
  })

    toast.success("product added to cart!!")
} 


  return (
    <div className='product'>
    <img src={product.image} alt="" />
    <h1>{product.title}</h1>
    {/* <p>{product.category}</p> */}
      <h3>Price:${product.price}</h3>
  <span>
  <button className='add_cart' onClick={() => handleAdd(product)}>Add to Cart</button>
  <button className='wishlist' onClick={() => addtoWishlist(product)}>Wishlist</button>
  </span>
          </div>
  )
}

export default ProductCard
