import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { User } from "../../UserContext";

export default function UpdateProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [accept, setAccept] = useState(false);
  const [Products, setProducts] = useState([]);

  let id = window.location.pathname.split("/").slice(-1)[0];

  let nav = useNavigate();

  let showToken = useContext(User);
  let token = showToken.auth.token;

  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/product/showbyid/${id}`, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //     .then((data) => {
  //       setTitle(data.data[0].title);
  //       setDescription(data.data[0].description);
  //     })
  //     .catch((err) => console.log(err));
  // },[]);

  useEffect(() => {
    let getData = localStorage.getItem("SendProducts");
    let convertToJson = JSON.parse(getData);
    convertToJson.map((data, index) => {
      if (data.id === parseInt(id)) {
        setTitle(data.title);
        setDescription(data.description);
        return <span key={index}></span>;
      }
    });
  }, []);

  // async function sendData(e) {
  //   e.preventDefault();
  //   setAccept(true);
  //   try {
  //     let formData = new FormData();

  //     formData.append("title", title);
  //     formData.append("description", description);
  //     formData.append("image", image);

  //     await axios.post(
  //       `http://127.0.0.1:8000/api/product/update/${id}`,
  //       formData,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //     nav("/dashboard/products");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  function sendData(e) {
    e.preventDefault();
    setAccept(true);
    try {
      let getData = localStorage.getItem("SendProducts");
      let convertDataToJson = JSON.parse(getData);

      convertDataToJson.map((data, index) => {
        if (data.id === parseInt(id)) {
          data.title = title;
          data.description = description;
          data.image = image;

          let filteredUsers = convertDataToJson.filter(
            (user) => user.id !== parseInt(id)
          );

          let updatedUsers = [...filteredUsers, data];

          let sortedUsers = updatedUsers.sort((a, b) => a.id - b.id);

          localStorage.setItem("SendProducts", JSON.stringify(sortedUsers));

          setProducts(updatedUsers);

          nav("/dashboard/products");

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
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {accept && title === "" && (
          <p className="error">Title should not be enmpty</p>
        )}
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {accept && description === "" && (
          <p className="error">description Should not be Empty</p>
        )}
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          placeholder="Image..."
          onChange={(e) => setImage(e.target.files.item(0))}
        />

        <div className="rgister">
          <button>Update Products</button>
        </div>
      </form>
    </div>
  );
}
