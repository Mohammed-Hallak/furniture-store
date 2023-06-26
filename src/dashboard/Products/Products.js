import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [run, setRun] = useState(0);

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
