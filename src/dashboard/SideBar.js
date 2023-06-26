import React from "react";
import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

export default function SideBar() {
  let products = localStorage.getItem("SendProducts");
  let convertProducts = JSON.parse(products);
  return (
    <div className="side-bar">
      <nav>
        <NavLink className={"item-link"} to={"users"}>
          <FaUsers />
          Users
        </NavLink>
        <NavLink className={"item-link"} to={"createUser"}>
          <FaUserPlus />
          Create Users
        </NavLink>
        {convertProducts === 0 ? (
          <NavLink className={"item-link"} to={"dash-products"}>
            <FaSearchPlus />
            Products
          </NavLink>
        ) : (
          ""
        )}
        <NavLink className={"item-link"} to={"createProducts"}>
          <FaPlusCircle />
          Create Products
        </NavLink>
      </nav>
    </div>
  );
}
