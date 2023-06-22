import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { User } from "../UserContext";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [emailError, setEmailError] = useState(200);
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(true);
  const [sendUser, setSendUser] = useState([]);
  const [id, setId] = useState(0);

  let cookie = new Cookies();
  let getToken = cookie.get("Bearer");

  let nav = useNavigate();

  // async function sendData(e) {
  //   e.preventDefault();
  //   setAccept(true);
  //   try {
  //     await axios.post(
  //       "http://127.0.0.1:8000/api/user/create",
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
    if (name === "" || password.length === 0 || passwordR !== password) {
      setFlag(false);
    } else {
      setFlag(true);
    }

    if (flag) {
      let getUsers = localStorage.getItem("SendUsers");

      let convertToJson = JSON.parse(getUsers);
      let dataUser = {
        id: id,
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordR,
      };
      const updatedUsers = [...sendUser, dataUser];

      setSendUser(updatedUsers);
      localStorage.setItem("SendUsers", JSON.stringify(updatedUsers));

      nav("/dashboard/users");
    }
  }

  useEffect(() => {
    const storedData = localStorage.getItem("SendUsers");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setId(parsedData.length + 1);

      setSendUser(parsedData);
    }
  }, []);

  return (
    <div>
      <form onSubmit={sendData} style={{ width: "100%" }}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {accept && name === "" && (
          <p className="error">Username should not be empty</p>
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
          <button>Create User</button>
        </div>
      </form>
    </div>
  );
}
