import { useEffect, useState } from "react";

export default function GoToTop() {
  const [open, setOpen] = useState(false);
  function Click() {
    setOpen(!open);
  }
  useEffect(() => {
    let GoToTopHolderOne = document.querySelector(
      ".goToTop .holder .holder-one"
    );
    let GoToTopHolderTwo = document.querySelector(
      ".goToTop .holder .holder-two"
    );
    let GoToTopHolderThree = document.querySelector(
      ".goToTop .holder .holder-three"
    );

    if (open) {
      GoToTopHolderOne.classList.add("open");
      GoToTopHolderTwo.classList.add("open");
      GoToTopHolderThree.classList.add("open");
    } else {
      GoToTopHolderOne.classList.remove("open");
      GoToTopHolderTwo.classList.remove("open");
      GoToTopHolderThree.classList.remove("open");
    }
  }, [open]);
  
  function clicked() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function GoToAbout() {
    window.scrollTo({
      top: 637,
      behavior: "smooth",
    });
  }
  function GoToContact() {
    window.scrollTo({
      top: 3050,
      behavior: "smooth",
    });
  }

  return (
    <div className="goToTop">
      <div className="holder" onClick={Click}>
        <i className="fa-solid fa-bars"></i>
        <div className="holder-one" onClick={GoToAbout}>
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="holder-two">
          <i className="fa-solid fa-phone" onClick={GoToContact}></i>
        </div>
        <div className="holder-three" onClick={clicked}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </div>
    </div>
  );
}
