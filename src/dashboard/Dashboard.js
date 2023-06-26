import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import "./dashboard.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import NoProducts from "../Tool/NoProducts";

export default function Dashboard() {
  const [click, setClick] = useState(false);
  function openDropDown(e) {
    e.preventDefault();
    setClick(!click);
  }

  return (
    <>
      <TopBar />

      <div className="content-flex">
        <div
          onClick={openDropDown}
          className={
            click ? "click drop-down dashboard" : "drop-down dashboard"
          }
        >
          <i className=" fa-solid fa-bars dash-i"></i>
          <div className="holder">
            <nav>
              <NavLink className={"item-link"} to={"users"}>
                <FaUsers />
                Users
              </NavLink>
              <NavLink className={"item-link"} to={"createUser"}>
                <FaUserPlus />
                Create Users
              </NavLink>
              <NavLink className={"item-link"} to={"dash-products"}>
                <FaSearchPlus />
                Products
              </NavLink>
              <NavLink className={"item-link"} to={"createProducts"}>
                <FaPlusCircle />
                Create Products
              </NavLink>
            </nav>
          </div>
        </div>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
