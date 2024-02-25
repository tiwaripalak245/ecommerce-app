import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../../context/ProductContext";
import { fetchProducts } from "../../context/ProductAction";
import product from "../assets/product.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductContainer = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { products, dispatch } = useContext(ProductContext);

  const getProducts = async () => {
    try {
      const data = await fetchProducts();

      dispatch({
        type: "GET_PRODUCTS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
useEffect(() => {
  
  if (!user) {
    navigate("/register");
  }
}, [user])

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="product-container">
        <span>
          {/* <img src={product} alt="" /> */}
          <h1 className="all-product-title">Must Haves</h1>
        </span>
        <h4>Some of our favourite picks this week.</h4>
        <div className="container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
