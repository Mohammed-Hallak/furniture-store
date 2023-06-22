import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(true);
  const [sendUser, setSendUser] = useState([]);
  const [id, setId] = useState(1);

  let nav = useNavigate();

  function sendData(e) {
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length === 0 || passwordR !== password) {
      setFlag(false);
    } else {
      setFlag(true);
    }
    if (flag) {
      let dataUser = {
        id: id,
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordR,
      };
      setId((prev) => prev + 1);
      // sendUserContext.setAuth(dataUser);

      const updatedUsers = [...sendUser, dataUser];

      setSendUser(updatedUsers);
      console.log(id);

      // sendUsersContext.setUsers(updatedUsers);

      localStorage.setItem("SendUser", JSON.stringify(dataUser));
      localStorage.setItem("SendUsers", JSON.stringify(updatedUsers));

      nav("/");
    }
  }

  useEffect(() => {
    const storedData = localStorage.getItem("SendUsers");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // console.log(parsedData.length);
      setId(parsedData.length + 1);

      setSendUser(parsedData);
    }
  }, []);

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
        {accept && <p className="error">Email is Alerady been taken</p>}
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
          <button type="submit" onSubmit={sendData}>
            Redister
          </button>
        </div>
      </form>
    </div>
  );
}
