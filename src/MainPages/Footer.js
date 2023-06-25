import React, { useContext } from "react";
import { User } from "../UserContext";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <h2>
          <Link to={"/about"}>Al Hallak</Link>
        </h2>
        <div className="cards">
          <div className="card">
            <h3>About Shop</h3>
            <div className="details">
              <i className="fa-solid fa-location-dot"></i>
              <p>Damascus , Muhjreen </p>
            </div>
            <div className="details">
              <i className="fa-solid fa-phone"></i>
              <p>+963 991414139</p>
            </div>
            <div className="details">
              <i className="fa-solid fa-envelope"></i>
              <p>7ammoda0991414139@gmail.com</p>
            </div>
          </div>
          <div className="card">
            <h3>Information</h3>
            <p className="paragraph">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt
            </p>
          </div>
          <div className="card">
            <h3 className="imageTitle">Instagram</h3>
            <div className="images">
              <img src={require("../images/i-1.jpg")} alt="product" />
              <img src={require("../images/i-2.jpg")} alt="product" />
              <img src={require("../images/i-3.jpg")} alt="product" />
              <img src={require("../images/i-4.jpg")} alt="product" />
              <img src={require("../images/i-5.jpg")} alt="product" />
              <img src={require("../images/i-6.jpg")} alt="product" />
            </div>
          </div>
          <div className="card">
            <h3>Newsletter</h3>
            <form>
              <input type="email" placeholder="Email" className="email" />
              <Link to={"/register"} className="button">
                Subscribe
              </Link>
            </form>
            <div className="links">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <p>&copy; 2022 All Rights Reseved ,
            By <span>AlHallak</span> </p>
        </div>
      </div>
    </div>
  );
}
