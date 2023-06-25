import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { User } from "../../UserContext";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [run, setRun] = useState(0);

  let cookie = new Cookies();
  let getToken = cookie.get("Bearer");

  let context = useContext(User);
  let token = context.auth.token;

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/product/show", {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //     .then((data) => {
  //       setProducts(data.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [run]);

  // run

  // async function deleteProduct(id) {
  //   try {
  //     let res = await axios.delete(
  //       `http://127.0.0.1:8000/api/product/delete/${id}`,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + getToken,
  //         },
  //       }
  //     );
  //     if (res.status === 200) {
  //       setRun((prev) => prev + 1);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // let showProducts = products.map((product, index) => (
  //   <tr key={index}>
  //     <td>{index + 1}</td>
  //     <td>{product.title}</td>
  //     <td>{product.description}</td>
  //     <td>
  //       <Link to={`${product.id}`}>
  //         <i
  //           className="fa-solid fa-edit"
  //           style={{ color: "#74AFB9", cursor: "pointer" }}
  //         ></i>
  //       </Link>
  //       <Link>
  //         <i
  //           className="fa-solid fa-trash "
  //           style={{ color: "red" }}
  //           onClick={() => deleteProduct(product.id)}
  //         ></i>
  //       </Link>
  //     </td>
  //   </tr>
  // ));

  useEffect(() => {
    try {
      let getData = localStorage.getItem("SendProducts");
      let convertToJson = JSON.parse(getData);
      setProducts(convertToJson);
    } catch (err) {
      console.log(err);
    }
  }, [run]);

  let windowWidthh = window.innerWidth;
  let showProducts = products.map((product, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td
        style={
          windowWidthh < 768
            ? {
                display: "none",
              }
            : {
                display: "table-cell",
              }
        }
      >
        <Link to={`${product.id}`}>
          <i
            className="fa-solid fa-edit"
            style={{ color: "#74AFB9", cursor: "pointer" }}
          ></i>
        </Link>
        <Link>
          <i
            className="fa-solid fa-trash "
            style={{ color: "red" }}
            onClick={() => deleteProduct(product.id)}
          ></i>
        </Link>
      </td>
    </tr>
  ));

  function deleteProduct(id) {
    try {
      let getData = localStorage.getItem("SendProducts");
      let convertToJson = JSON.parse(getData);
      let filterdProducts = convertToJson.filter(
        (product) => product.id !== id
      );
      localStorage.setItem("SendProducts", JSON.stringify(filterdProducts));
      setRun((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    }
  }
  let windowWidth = window.innerWidth;
  return (
    <div style={{ width: "100%" }}>
      <table style={{ height: "fit-content" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th
              style={
                windowWidthh < 768
                  ? {
                      display: "none",
                    }
                  : {
                      display: "table-cell",
                    }
              }
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>{showProducts}</tbody>
      </table>
    </div>
  );
}
