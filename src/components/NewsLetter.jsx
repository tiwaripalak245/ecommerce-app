import React from 'react'
import shipping from '../assets/shipping.jpeg'

const NewsLetter = () => {
  return (
  <>
  <div className="shipping">
    <img src={shipping} alt="" />
  </div>
      <div className='newsletter'>
     <h1>Get More Exclusive offer</h1> 
     <p>Subscribe to our newsletter and stay updated</p>
     <div>
        <input type="Email" placeholder='Enter Your Email' />
        <button>Subscribe Now</button>
     </div>
    </div>
  </>  

  )
}

export default NewsLetter
