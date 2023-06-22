import { useEffect, useState } from "react";
import heroSide from "../images/hero-side-bg.png";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import AboutUsPage from "../SubPages/AboutUsPage";

Modal.setAppElement("#root");
export default function Landing() {
  const [open, setopen] = useState(false);

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  useEffect(() => {
    let scrollLanding = document.querySelector(".landing").scrollHeight;
    let scrollGoToTop = document.querySelector(".goToTop .holder");
    window.onscroll = () => {
      let PageY = window.pageYOffset;

      if (PageY >= scrollLanding) {
        scrollGoToTop.classList.add("up");
      } else {
        scrollGoToTop.classList.remove("up");
      }
    };
  }, []);

  return (
    <div className="landing">
      <div className="left">
        <div className="introduse">
          <h1>THE</h1>
          <h2>
            LATEST <span>FURNITURE</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className="buttons">
            <a href="#aboutUs" className="button">
              Read More
            </a>
            <a href="#contact-us">ContactUs</a>
          </div>
        </div>
      </div>
      <div className="right">
        <div
          className="holder"
          style={{
            backgroundImage: `url(${heroSide})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <img src={require("../images/slider-img.png")} alt="product-chair" />
          </div>
          <span onClick={() => setopen(!open)}>
            <i className="fa-solid fa-play" onClick={() => setopen(!open)}></i>
          </span>
          <Modal
            isOpen={open}
            onRequestClose={() => setopen(false)}
            style={{
              content: {
                borderColor: "#64d098",
                overflow: "hidden",
                margin: "auto",
              },
            }}
          >
            <div className="holder-video">
              <div className="video">
                <h2>Our Products</h2>
                <ReactPlayer
                  url={require("../images/Facebook 576252584605461(360p).mp4")}
                  controls
                  playing={open}
                  className={"play"}
                />
              </div>
              <div className="close" onClick={() => setopen(!open)}>
                <i className="fa-solid fa-close"></i>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
