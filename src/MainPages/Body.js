import React from "react";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import Categories from "./Categories";
import Collection from "./Collection";
import Brands from "./Brands";
import ContactUs from "./ContactUs";

import Footer from "./Footer";
import GoToTop from "../Tool/GoToTop";
import Testimonial from "../Testimonial";

export default function Body() {
  return (
    <div>
      <Landing />
      <GoToTop />
      <AboutUs show={true} />
      <Categories />
      <Collection />
      <Brands />
      <ContactUs />
      <Testimonial />
      <Footer />
    </div>
  );
}
