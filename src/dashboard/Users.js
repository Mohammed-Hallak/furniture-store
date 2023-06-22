import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { User } from "../UserContext";
import Cookies from "universal-cookie";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [run, setRun] = useState(0);

  let cookie = new Cookies();
  let getToken = cookie.get("Bearer");

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/user/show", {
  //       headers: {
  //         Authorization: "Bearer " + getToken,
  //       },
  //     })
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => console.log(err));
  // }, [run]);

  // async function deleteUser(id) {
  //   try {
  //     let res = await axios.delete(
  //       `http://127.0.0.1:8000/api/user/delete/${id}`,
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
  function deleteUser(id) {
    let getData = localStorage.getItem("SendUsers");
    let convertToJson = JSON.parse(getData);

    let filteredUsers = convertToJson.filter(
      (data) => data.id !== parseInt(id)
    );
    localStorage.setItem("SendUsers", JSON.stringify(filteredUsers));
    setRun((prev) => prev + 1);
  }

  let showUser = localStorage.getItem("SendUsers");
  let convertData = JSON.parse(showUser);

  useEffect(() => {}, [run]);
  let windowWidthh = window.innerWidth;

  let showUsers = convertData.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td style={
                windowWidthh < 768
                  ? { display: "none" }
                  : { display: "inline-block" }
              }>
        <Link to={`${user.id}`}>
          <i
            style={{ color: "#74AFB9", cursor: "pointer" }}
            className="fa-solid fa-edit"
          ></i>
        </Link>

        <Link>
          <i
            style={{ color: "red" }}
            className="fa-solid fa-trash"
            onClick={() => deleteUser(user.id)}
          ></i>
        </Link>
      </td>
    </tr>
  ));

  let windowWidth = window.innerWidth;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th
              style={
                windowWidth < 768
                  ? { display: "none" }
                  : { display: "inline-block" }
              }
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>{showUsers}</tbody>
      </table>
    </>
  );
}
