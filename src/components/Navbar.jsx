import React, { useContext } from 'react'
import logo from '../assets/green-logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ProductContext from '../../context/ProductContext';





const Navbar = () => {

  const { cartItems } = useContext(ProductContext)

  return (
    //     <div className='navbar'>
    //     <Link className='nav-link mx-2' to={"/"}>
    //     <div className="logo">
    //         <img src={logo} alt="" />
    // <p>MY STORE</p>
    //       </div>
    //     </Link>

    //       <ul className="nav-menu">
    //       <li className="category">
    //   <Link className='nav-link mx-2' to={"/electronics"}>Electronics</Link></li>

    // <li className="category">
    //   <Link className='nav-link mx-2' to={"/jewelery"}>Jwellery</Link></li>

    // <li className="category">
    //   <Link className='nav-link mx-2' to={"/mens clothing"}>Men's Clothing</Link></li>



    // <li className="category">
    //   <Link className='nav-link mx-2' to={"/womens clothing"}>Women's Clothing</Link></li>



    //       </ul>
    // <div className="nav-button">
    // <Link to={"/cart"}>
    //    <div className="cart-btn">
    //         <button><FaShoppingCart />  Cart({cartItems.length})</button>
    //       </div>
    //    </Link>

    //    <Link to={"/login"}>
    //    <div className="cart-btn">
    //         <button>Login</button>
    //       </div>
    //    </Link>
    // </div>

    //     </div>


    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
           <Link className='nav-link mx-2' to={"/"}>
          <div className="logo">
            <img src={logo} alt="" />
            <p>StyleVista</p>
          </div>
        </Link>       
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav-menu">
            <li className="category">
              <Link className='nav-link mx-2' to={"/electronics"}>Electronics</Link></li>

            <li className="category">
              <Link className='nav-link mx-2' to={"/jewelery"}>Jwellery</Link></li>

            <li className="category">
              <Link className='nav-link mx-2' to={"/mens clothing"}>Men's Clothing</Link></li>

            <li className="category">
              <Link className='nav-link mx-2' to={"/womens clothing"}>Women's Clothing</Link></li>


          </ul>
        </div>
      </div>

        <div className="nav-button">
    <Link to={"/cart"}>
   <div className="cart-btn">
   <button><FaShoppingCart />  Cart({cartItems.length})</button>
   </div>
    </Link>

  <Link to={"/login"}>
<div className="cart-btn">
  <button>Login</button>
    </div>
    </Link>
   </div>
    </nav>
  )
}

export default Navbar
