import React, { useEffect, useState } from "react";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("one");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const categoriesImages = document.querySelectorAll(
      ".categories .right .images .card"
    );
    categoriesImages.forEach((image) => {
      image.classList.add("remove");
    });

    const selectedCategoryImage = document.querySelector(
      `.categories .right .images .${selectedCategory}`
    );
    if (selectedCategoryImage) {
      selectedCategoryImage.classList.remove("remove");
    }
  }, [selectedCategory]);

  return (
    <div className="categories">
      <div className="container">
        <div className="left">
          <h2>Trending Categories</h2>
          <div className="group">
            <div className="holder">
              <span>01</span>
              <p
                className={`one ${selectedCategory === "one" ? "click" : ""}`}
                onClick={() => handleCategoryClick("one")}
              >
                Chairs
              </p>
            </div>
            <div className="holder">
              <span>02</span>
              <p
                className={`two ${selectedCategory === "two" ? "click" : ""}`}
                onClick={() => handleCategoryClick("two")}
              >
                Tables
              </p>
            </div>
            <div className="holder">
              <span>03</span>
              <p
                className={`three ${
                  selectedCategory === "three" ? "click" : ""
                }`}
                onClick={() => handleCategoryClick("three")}
              >
                Beds
              </p>
            </div>
            <div className="holder">
              <span>04</span>
              <p
                className={`four ${selectedCategory === "four" ? "click" : ""}`}
                onClick={() => handleCategoryClick("four")}
              >
                Furnitures
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="images">
            <div className=" card one ">
              <div className="image  down">
                <img src={require("../images/t-1.jpg")} alt="products" />
              </div>
              <div className="image ">
                <img src={require("../images/t-2.jpg")} alt="products" />
              </div>
              <div className="image  down">
                <img src={require("../images/t-3.jpg")} alt="products" />
              </div>
              <div className="image ">
                <img src={require("../images/t-4.jpg")} alt="products" />
              </div>
            </div>
            <div className="card two remove">
              <div className="image  down">
                <img src={require("../images/t-3.jpg")} alt="products" />
              </div>
              <div className="image ">
                <img src={require("../images/t-2.jpg")} alt="products" />
              </div>
              <div className="image  down">
                <img src={require("../images/t-1.jpg")} alt="products" />
              </div>
              <div className="image ">
                <img src={require("../images/t-4.jpg")} alt="products" />
              </div>
            </div>
            <div className="card three remove">
              <div className="image  down">
                <img src={require("../images/t-3.jpg")} alt="products" />
              </div>
              <div className="image ">
                <img src={require("../images/t-4.jpg")} alt="products" />
              </div>
              <div className="image  down">
                <img src={require("../images/t-1.jpg")} alt="products" />
              </div>
              <div className="image ">
                <img src={require("../images/t-2.jpg")} alt="products" />
              </div>
            </div>
            <div className="card four remove">
              <div className="image  down">
                <img src={require("../images/t-4.jpg")} alt="products" />
              </div>
              <div className="image ">
                <img src={require("../images/t-3.jpg")} alt="products" />
              </div>
              <div className="image  down">
                <img src={require("../images/t-2.jpg")} alt="products" />
              </div>
              <div className="image ">
                <img src={require("../images/t-1.jpg")} alt="products" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
