import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function CreateProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [accept, setAccept] = useState(false);
  const [flag, setFlag] = useState(true);
  const [id, setId] = useState(1);
  const [products, setProducts] = useState([]);


  let cookie = new Cookies();
  let token = cookie.get("Bearer");

  let nav = useNavigate();

  // async function sendData(e) {
  //   e.preventDefault();
  //   setAccept(true);

  //   try {
  //     let formData = new FormData();
  //     formData.append("title", title);
  //     formData.append("description", description);
  //     formData.append("image", image);
  //     await axios.post(
  //       "http://127.0.0.1:8000/api/product/create",

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

    if (title === "" || description === "" || image === "") {
      setFlag(false);
    } else {
      setFlag(true);
    }

    if (flag) {
      let data = {
        id: id,
        title: title,
        description: description,
        image: image.name,
      };

      setSendProducts(data);
      window.location.pathname="dashboard/products"

      setId(id + 1);
    }
  }

  function setSendProducts(newProduct) {
    let existingProducts = JSON.parse(localStorage.getItem("SendProducts")) || [];
    existingProducts.push(newProduct);
    localStorage.setItem("SendProducts", JSON.stringify(existingProducts));
    setProducts(existingProducts);
  }

  useEffect(() => {
    let getProduct = localStorage.getItem("SendProducts");
    if (getProduct) {
      let convertToJson = JSON.parse(getProduct);
      setProducts(convertToJson);
      setId(convertToJson.length + 1); 
    }
  }, []);

  return (
    <div>
      <form onSubmit={sendData} style={{ width: "100%" }}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {accept && title === "" && (
          <p className="error">Title should not be empty</p>
        )}
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="title"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          placeholder="Image..."
          onChange={(e) => setImage(e.target.files.item(0))}
        />
        <div className="rgister">
          <button>Create Products</button>
        </div>
      </form>
    </div>
  );
}
