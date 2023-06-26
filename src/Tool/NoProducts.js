import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Products from "../dashboard/Products/Products";

export default function NoProducts() {
  let location = useLocation();
  let products = localStorage.getItem("SendProducts");
  let convertProducts = JSON.parse(products);

  return convertProducts === 0 ? (
    <Products />
  ) : (
    <Navigate state={{ from: location }} replace to={"./createProducts"} />
  );
}
