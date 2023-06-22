import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(true);

  let nav = useNavigate();

  function sendData(e) {
    e.preventDefault();

    setAccept(true);
    if (password.length === 0 || email === "") {
      setFlag(false);
    } else {
      setFlag(true);
    }

    if (flag) {
      let getData = localStorage.getItem("SendUsers");
      let users = JSON.parse(getData);
      users.map((data, index) => {
        if (data.email === email && data.password === password) {
          nav("/");
          let dataUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            passwordConfirmation: data.passwordConfirmation,
          };
          localStorage.setItem("SendUser", JSON.stringify(dataUser));
        }
        return <span key={index}></span>;
      });
    }
  }

  // useEffect(() => {
  //   let getData = localStorage.getItem("SendUsers");
  //   let users = JSON.parse(getData);
  //   let showUsers = users.map((data, index) => {
  //     console.log(data.name);
  //   });
  // }, []);

  return (
    <div className="father">
      <form onSubmit={sendData}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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

        <div className="rgister">
          <button type="submit" onSubmit={sendData}>
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
