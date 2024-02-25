import React, { useContext } from "react";
import CartItems from "../src/components/CartItems";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProduct } = useContext(ProductContext);

  const totalAmount = cartProduct.reduce((p, currentItem) => {
    return p + currentItem.price * currentItem.itemQuantity;
  }, 0);

  return (
    <div className="cart-container">
      <div className="cart-items">
        <CartItems />
        {/* {cartItems.map((item) => <CartItems key={item.id} item={item}/>)} */}
      </div>

      <div className="bill-section">
        <h1>
          Total Amount <br />
          {totalAmount}
        </h1>
        <div className="pay-btn">Pay Now</div>
      </div>


    </div>
  );
};

export default Cart;
