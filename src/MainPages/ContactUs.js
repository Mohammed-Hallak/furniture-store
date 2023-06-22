import React, { useEffect, useState } from "react";
import Map from "../Tool/Map";

export default function ContactUs() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  // useEffect(() => {
  //   let getData = localStorage.getItem("UserData");
  //   let convertData = JSON.parse(getData);
  //   if (convertData) {
  //     convertData.map((data, index) => {
  //       setUser(data.name);
  //       setEmail(data.email);
  //       return <span key={index}></span>;
  //     });
  //   } else {
  //     return;
  //   }
  // }, []);
  return (
    <div className="contact-us" id="contact-us">
      <div className="container">
        <div className="left">
          <h2>Contact Us</h2>
          <form>
            <input
              type="text"
              placeholder="Name..."
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea placeholder="Your Message..."></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="right">
          <h2 className="location">Our Location</h2>
          <div className="holder">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
