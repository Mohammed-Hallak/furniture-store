import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div
      
      className="container d-flex top-bar"
    >
      <h1>Dashboard</h1>

      <Link className="register-nav" to={"/"}>
        Go To Web Site
      </Link>
    </div>
  );
}
