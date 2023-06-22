import React from "react";
import Slider from "react-perfect-slider";
import chunk from "lodash/chunk";

export default function Brands() {
  let showBrandsTwo = [
    {
      id: 1,
      title: "chair",
      discription: "Comfortable Chair",
      img: require("../images/slider-img.png"),
      price: "99$",
    },
    {
      id: 2,
      title: "chair",
      discription: "Comfortable Chair",
      img: require("../images/slider-img.png"),
      price: "70$",
    },
    {
      id: 3,
      title: "chair",
      discription: "Comfortable Chair",
      img: require("../images/slider-img.png"),
      price: "30$",
    },
    {
      id: 4,
      title: "chair",
      discription: "Comfortable Chair",
      img: require("../images/slider-img.png"),
      price: "100$",
    },
    {
      id: 5,
      title: "chair",
      discription: "Comfortable Chair",
      img: require("../images/slider-img.png"),
      price: "59$",
    },
    {
      id: 6,
      title: "chair",
      discription: "Comfortable Chair",
      img: require("../images/slider-img.png"),
      price: "58$",
    },
  ];

  let showProductsTwo = showBrandsTwo.map((proTwo, index) => (
    <div className="card" key={index}>
      <div className="image">
        <img src={proTwo.img} alt="Product-logo" />
        <span>{proTwo.price}</span>
        <p>{proTwo.title}</p>
      </div>
    </div>
  ));

  // useEffect(() => {

  const showTestTwoGroups = (() => {
    // console.log(window.innerWidth < 768);
    if (window.innerWidth < 768) {
      return chunk(showProductsTwo, 1);
    } else if (showProductsTwo.length % 2 === 0) {
      return chunk(showProductsTwo, 3);
    } else {
      return chunk(showProductsTwo, 2);
    }
  })();
  // }, []);

  return (
    <div className="brands">
      <div className="container">
        <h2>Featured Brands</h2>
        <Slider
          loop="false"
          renderControls={(next, previous) => [
            <span key={previous} className="slider-left" onClick={previous}>
              <i className="fa-solid fa-arrow-left"></i>
            </span>,
            <span key={next} className="slider-right" onClick={next}>
              <i onClick={next} className="fa-solid fa-arrow-right"></i>
            </span>,
          ]}
        >
          {showTestTwoGroups.map((group, index) => (
            <div className="cards" key={index}>
              {group}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
