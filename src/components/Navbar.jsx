import React, { useContext } from "react";
import logo from "../assets/green-logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

import { Link } from "react-router-dom";
import ProductContext from "../../context/ProductContext";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { logOutUser } from "../../features/authentication/authSlice";

const Navbar = () => {
  const { wishItem, cartProduct } = useContext(ProductContext);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();



  const handleLogout = () => {
    dispatch(logOutUser());
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#decba4"}}>
      <div className="container-fluid">
        <Link className="nav-link mx-2" to={"/"}>
          <div className="logo">
            <img src={logo} alt="" />
            <p>StyleVista</p>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav-menu">
            <li className="category">
              <Link className="nav-link mx-2" to={"/electronics"}>
                Electronics
              </Link>
            </li>

            <li className="category">
              <Link className="nav-link mx-2" to={"/jewelery"}>
                Jwellery
              </Link>
            </li>

            <li className="category">
              <Link className="nav-link mx-2" to={"/mens clothing"}>
                Men's Clothing
              </Link>
            </li>

            <li className="category">
              <Link className="nav-link mx-2" to={"/womens clothing"}>
                Women's Clothing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-button">
        {user ? (
          <>
            <Link to={"/cart"}>
              <div className="cart-btn">
                <FaShoppingCart />
                <button> Cart({cartProduct.length})</button>
              </div>
            </Link>

            <div className="wish-btn">
              <i className="bi bi-heart"></i>{" "}
              <Link to={"/wish"}>
                <button>Wishlist({wishItem.length})</button>
              </Link>
            </div>

            <div className="logout">
              <Button
                variant="contained"
                sx={{ marginTop: "12px", marginLeft: "10px", backgroundColor: "#AA5656" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            <div className="cart-btn">
              <IoMdLogIn />
              <button>Profile</button>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
