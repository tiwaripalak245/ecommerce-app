import React, { useContext } from 'react'
import CartItems from '../src/components/CartItems'
import ProductContext from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cartItems} = useContext(ProductContext)

  const total = cartItems.reduce((p , c) => {
     return p + c.price
    }, 0)



  return (
    <div className='cart-container'>
      <div className="cart-items">

        {cartItems.map((item) => <CartItems key={item.id} item={item}/>)}
      </div>

      <div className="bill-section">
        <h1>Total Amount <br />{total}
</h1>
<div className="pay-btn">
    Pay Now
</div>
      </div>
      
   <div className="shopping-btn">
    <Link to={'/'}><button>Continue Shopping</button>
</Link>
    <button>Clear Cart</button>
   </div>
    </div>
    
  )
}

export default Cart
