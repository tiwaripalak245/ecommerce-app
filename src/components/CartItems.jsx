import React, { useContext, useState } from 'react'
import ProductContext from '../../context/ProductContext'
import cartImage from '../assets/no-product-in-cart.png'
import { toast } from 'react-toastify'

const CartItems = ({item}) => {
    
  const {total, dispatch, cartProduct} = useContext(ProductContext)
  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_ITEMS",
      payload: id
    })
    toast.error("Product Removed!!")
  }

  const handleIncrease = (currentItem) => {
    dispatch({
      type: "INCREASE_ITEMS",
      payload: currentItem
    })
  }
  const handleDecrease = (currentItem) => {
    dispatch({
      type: "DECREASE_ITEMS",
      payload: currentItem
    })
  }



  if (cartProduct.length === 0) {
    return (
  <>
<div className="div no-cart">
<img src={cartImage} alt="" />
      <h1 className="display-5 text-center">NO items in your cart!!</h1>
</div>
  </>
    )
  }



  return (
<>
{
  cartProduct.map((currentItem, index) => {
    return ( 
      <div className='cart-item' key={index}>  

      <img src={currentItem.image} alt="" />
      <span>
     <h1>{currentItem.title}</h1>
      <h3>Rate: ${currentItem.price}</h3>
      <button className="quantity-btn" onClick={() => handleIncrease(currentItem)} > +</button> 
      <h3 >Qty: {currentItem.itemQuantity}</h3>
      <button className="quantity-btn" onClick={() =>  handleDecrease(currentItem)}> -</button>

    
     </span>
     <button className="remove-btn" onClick={() => handleRemove(currentItem.id)}> Remove Item</button>
  
    </div>
     )
  })
}

</>
  )
}

export default CartItems
