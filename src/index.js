import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./all.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./UserContext";
import UsersProvider from "./Userscontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
