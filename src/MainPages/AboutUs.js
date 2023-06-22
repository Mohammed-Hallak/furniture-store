import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs(props) {
  return (
    <div className="aboutUs" id="aboutUs">
      <div className="left">
        <h2>About Us</h2>
        <p style={{ margin: props.pad && "0" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        {props.about && (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <span>Made By Hallak</span>
          </>
        )}
        {props.show && (
          <div className="buttons">
            <Link to={"/about"} className="link">
              Read More
            </Link>
          </div>
        )}
      </div>
      <div className="right">
        <img src={require("../images/about-img.png")} alt="logo" />
      </div>
    </div>
  );
}
