import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import Wishlist from "../src/components/Wishlist";
import emptywishlist from "../src/assets/emptywishlist.jpg";
import { Link } from "react-router-dom";

const Wish = () => {
  const { wishItem } = useContext(ProductContext);
  if (wishItem.length === 0) {
    return (
      <>
        <div className="div no-cart">
          <img src={emptywishlist} alt="" />
          <h2 className="display-5 text-center">NO items in your Wishlist!!</h2>
          <Link to={"/productcontainer"} style={{ textDecoration: "none" }}>
            <button className="shopping-btn">Start Shopping</button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="wish-items">
      {wishItem.map((wish) => (
        <Wishlist key={wish.id} wish={wish} />
      ))}
    </div>
  );
};

export default Wish;
