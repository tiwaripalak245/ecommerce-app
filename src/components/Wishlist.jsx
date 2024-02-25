import React from 'react'

const Wishlist = ({wish}) => {

  
  return (
<>
<div className='wish-product'>  
      <img src={wish.image} alt="" />
      <span>
     <h1>{wish.title}</h1>
      <h3>Rate: ${wish.price}</h3>
      {/* <h3 >Qty: {total}</h3> */}
      <h1></h1>
    
     </span>
     <button className="remove-btn" > Remove Item</button>

    </div>

</>
  )
}

export default Wishlist
