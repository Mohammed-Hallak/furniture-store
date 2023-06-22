import React from "react";
import Header from "../Header";
import AboutUs from "../MainPages/AboutUs";
import Footer from "../MainPages/Footer";

export default function AboutUsPage() {
  return (
    <div>
      <Header />
      <AboutUs show={false} about={true} pad={true} />
      <Footer />
    </div>
  );
}
