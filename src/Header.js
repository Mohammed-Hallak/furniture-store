import { Link, useNavigate } from "react-router-dom";
import { User } from "./UserContext";
import { Users } from "./Userscontext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default function Header() {
  let nav = useNavigate();

  const [click, setClick] = useState(false);

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("SendUser");
    nav("/");
  }

  function openDropDown(e) {
    e.preventDefault();
    setClick(!click);
  }

  return (
    <>
      <div className="container">
        <div className="d-flex" style={{ height: "55px" }}>
          <div>
            <h1 className="title">AlHallak</h1>
          </div>

          <div className={click ? "drop-down click" : "drop-down"}>
            <i onClick={openDropDown} className=" fa-solid fa-bars"></i>
            <div className="holder">
              <Link to={"/"} className="register-nav">
                Home
              </Link>
              <Link to={"/about"} className="register-nav">
                About
              </Link>
              <Link to={"/contactUs"} className="register-nav">
                Contact Us
              </Link>
              <Link to={"/our-products"} className="register-nav">
                Our Products
              </Link>
              {!localStorage.getItem("SendUser") ? (
                <>
                  <Link to={"/register"} className="register-nav">
                    Register
                  </Link>
                  <Link to={"/login"} className="register-nav">
                    Log in
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/dashboard"} className="register-nav">
                    Dashboard
                  </Link>
                  <Link onClick={logout} className="register-nav">
                    Logout
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="links">
            {/* <div className="flex-1"> */}
            <Link to={"/"} className="register-nav">
              Home
            </Link>
            <Link to={"/about"} className="register-nav">
              About
            </Link>
            <Link to={"/contactUs"} className="register-nav">
              Contact Us
            </Link>
            <Link to={"/our-products"} className="register-nav">
              Our Products
            </Link>
            {/* </div> */}
            {!localStorage.getItem("SendUser") ? (
              <>
                <Link to={"/register"} className="register-nav">
                  Register
                </Link>
                <Link to={"/login"} className="register-nav">
                  Log in
                </Link>
              </>
            ) : (
              <>
                <Link to={"/dashboard"} className="register-nav">
                  Dashboard
                </Link>
                <Link onClick={logout} className="register-nav">
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
