import React from "react";
import Slider from "react-perfect-slider";
import { register } from "swiper/element/bundle";
import chunk from "lodash/chunk";

register();

export default function Testimonial() {
  let secondTest = [
    {
      img: "./images/client-2.png",
      name: "Aliqua",
      position: "trainer",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrudLorem ipsum",
    },
    {
      img: "./images/client-1.png",
      name: "Mohammed",
      position: "senior",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrudLorem ipsum",
    },
    {
      img: "./images/client-2.png",
      name: "Hassan",
      position: "Developer",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrudLorem ipsum",
    },
    {
      img: "./images/client-1.png",
      name: "Magnet",
      position: "trainer",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrudLorem ipsum",
    },
    {
      img: "./images/client-2.png",
      name: "Khaled",
      position: "CEO",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrudLorem ipsum",
    },
    {
      img: "./images/client-1.png",
      name: "Samer",
      position: "Junior",
      describe:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrudLorem ipsum",
    },
  ];

  let showTestTwo = secondTest.map((data, index) => (
    <div className="card" key={index}>
      <div className="details">
        <div className="id">
          <div className="image">
            <img src={require(`${data.img}`)} alt="fot client" />
          </div>
          <div className="title">
            <p className="name">{data.name}</p>
            <p className="position">{data.position}</p>
          </div>
        </div>
        <p className="description">{data.describe}</p>
        <div className="arrow">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  ));

  const showTestTwoGroups = (() => {
    if (window.innerWidth < 768) {
      return chunk(showTestTwo, 1);
    } else if (showTestTwo.length % 2 === 0) {
      return chunk(showTestTwo, 2);
    } else {
      return chunk(showTestTwo, 3);
    }
  })();

  return (
    <div className="testimonial">
      <div className="container">
        <h2>Testimonial</h2>

        <Slider
          renderControls={(next, previous) => [
            <div key={previous} className="slider-left">
              <span onClick={previous} className="left">
                Previous
              </span>
            </div>,
            <div key={next} className="slider-right">
              <span key={next} onClick={next} className="right">
                Next
              </span>
            </div>,
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
// import React from 'react'

// export default function Testimonial() {
//   return (
//     <div>Testimonial</div>
//   )
// }
