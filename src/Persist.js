// import { useContext, useEffect, useState } from "react";
// import { User } from "./UserContext";
// import Cookies from "universal-cookie";
// import axios from "axios";
// import Loading from "./dashboard/Loading";
// import { Outlet } from "react-router-dom";

export default function Persist() {
  //   let context = useContext(User);
  //   let token = context.auth.token;
  //   const [loading, setLoading] = useState(true);

  //   let cookie = new Cookies();
  //   let getToken = cookie.get("Bearer");
  //   useEffect(() => {
  //     // async
  //     function refresh() {
  //       //     try {
  //       //       await axios
  //       //         .post("http://127.0.0.1:8000/api/refresh", null, {
  //       //           headers: {
  //       //             Authorization: "Bearer " + getToken,
  //       //           },
  //       //         })
  //       //         .then((data) => {
  //       //           context.setAuth((prev) => {
  //       //             return { userDetails: data.data.user, token: data.data.token };
  //       //           });
  //       //           cookie.set("Bearer", data.data.token);
  //       //         });
  //       //     } catch (err) {
  //       //       console.log(err);
  //       //     }finally{
  //       //       setLoading(false)
  //       //     }
  //     }
  //     !token ? refresh() : setLoading(false);
  //   }, []);

  //   return loading ? <Loading /> : <Outlet />;
  return;
}
