import React from "react";
import Navbar from "../1_Navbar/Navbar";
import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";

const HeroSection = () => {
  return (
    <section
      className="hero-section text-white d-flex align-items-center"
      style={{ backgroundImage: `url("/img/hero-man.jpg")` }}
    >
      <Navbar />

      <div
        className="container hero-content-container text-start"
        id="home"
      ></div>
    </section>
  );
};

export default HeroSection;
