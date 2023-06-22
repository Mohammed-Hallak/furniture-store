import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import NoToken from "../Tool/NoToken";
import { User } from "../UserContext";

export default function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [emailError, setEmailError] = useState(200);
  const [accept, setAccept] = useState(false);
  const [Users, setUsers] = useState([]);

  let id = window.location.pathname.split("/").slice(-1)[0];

  let nav = useNavigate();

  let cookie = new Cookies();
  let getToken = cookie.get("Bearer");

  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/user/showbyid/${id}`, {
  //       headers: {
  //         Authorization: "Bearer " + getToken,
  //       },
  //     })
  //     .then((res) => {
  //       setName(res.data[0].name);
  //       setEmail(res.data[0].email);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    let getData = localStorage.getItem("SendUsers");
    let convertToJson = JSON.parse(getData);
    convertToJson.map((data, index) => {
      if (data.id === parseInt(id)) {
        setName(data.name);
        setEmail(data.email);
        return <span key={index}></span>;
      }
    });
  }, []);

  // async function sendData(e) {
  //   e.preventDefault();
  //   setAccept(true);
  //   try {
  //     let res = await axios.post(
  //       `http://127.0.0.1:8000/api/user/update/${id}`,
  //       {
  //         name: name,
  //         email: email,
  //         password: password,
  //         password_confirmation: passwordR,
  //       },
  //       {
  //         headers: {
  //           Authorization: "Bearer " + getToken,
  //         },
  //       }
  //     );
  //     nav("/dashboard/users");
  //   } catch (err) {
  //     setEmailError(err.response.status);
  //   }
  // }

  function sendData(e) {
    e.preventDefault();
    setAccept(true);
    try {
      let getData = localStorage.getItem("SendUsers");
      let convertDataToJson = JSON.parse(getData);

      convertDataToJson.map((data, index) => {
        if (data.id === parseInt(id)) {
          data.name = name;
          data.email = email;
          data.password = password;
          data.passwordConfirmation = passwordR;

          let filteredUsers = convertDataToJson.filter(
            (user) => user.id !== parseInt(id)
          );

          let updatedUsers = [...filteredUsers, data];

          let sortedUsers = updatedUsers.sort((a, b) => a.id - b.id);

          localStorage.setItem("SendUsers", JSON.stringify(sortedUsers));

          setUsers(updatedUsers);

          nav("/dashboard/users");

          return <span key={index}></span>;
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="father">
      <form onSubmit={sendData}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {accept && name === "" && (
          <p className="error">Username should not be enmpty</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {accept && emailError && (
          <p className="error">Email is Alerady been taken</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Pssword..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {accept && password.length < 8 && (
          <p className="error">Password should be at least 8</p>
        )}
        <label htmlFor="repeat">Repeat Password</label>
        <input
          type="password"
          id="repeat"
          placeholder="Repeat Password..."
          value={passwordR}
          onChange={(e) => setPasswordR(e.target.value)}
        />
        {accept && password !== passwordR && (
          <p className="error">Repeat Password should be the same</p>
        )}
        <div className="rgister">
          <button>Update</button>
        </div>
      </form>
    </div>
  );
}
