import React from "react";
import { Link } from "react-router-dom";

export default function Collection() {
  return (
    <div className="collection">
      <div className="container">
        <div className="left">
          <h2>The Latest Collection</h2>
          <h3>50% DISCOUNT</h3>
          <Link to={"/our-products"} className="link">
            Buy Now
          </Link>
        </div>
        <div className="right">
          <div className="image">
            <img
              src={require("../images/discount-img.png")}
              alt="discount-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
