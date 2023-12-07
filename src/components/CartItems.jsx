import React, { useContext } from 'react'
import ProductContext from '../../context/ProductContext'

const CartItems = ({item}) => {

  const {total, dispatch} = useContext(ProductContext)

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_ITEMS",
      payload: id
    })
  }

  const handleIncrease = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id
    })
  }

  const handleDecrease = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };


  return (
<>
<div className='cart-item'>  
      <img src={item.image} alt="" />
      <span>
     <h1>{item.title}</h1>
      <h3>Rate: ${item.price}</h3>
      <h3 >Qty: 1</h3>
    
     </span>
     <button className="remove-btn" onClick={() => handleRemove(item.id)}> Remove Item</button>
     <button onClick={() => handleIncrease(item.id)}>+</button>
      <button onClick={() => handleDecrease(item.id)}>-</button>
    </div>

</>
  )
}

export default CartItems
