import React from 'react'
import hero_image from '../assets/herosection.jpg'
import { FaShoppingBag } from "react-icons/fa";
import sale from '../assets/green.webp'
import white from '../assets/white.webp'
import landing from '../assets/fashion-blog-banner.png'



const HeroSection = () => {
  return (
<>
<div className='hero-section'>

  <div className="landing-img">
    <img src={landing} alt="" />
  </div>

      
      </div>
  
    <div className="sale-image">
    <div className="clothes">
    <img src={sale} alt="" />
      <img src={white} alt="" />
    </div>

    <span>
    <h1>Don’t be slow! Our prices are low...
</h1>
<h3>Super Sale is Live @ 50 % off
!!!
</h3>
    </span>
    </div>
</>
    
  )
}

export default HeroSection
