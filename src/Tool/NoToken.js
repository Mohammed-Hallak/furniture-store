import { useContext } from "react";
import { User } from "../UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function NoToken() {
  let showUser = useContext(User);

  let location = useLocation();

  let userData = localStorage.getItem("UserData");

  // return showUser.auth.userDetails ? (
  return userData ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: location }} replace to={"/login"} />
  );
}
