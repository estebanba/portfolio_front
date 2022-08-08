import React from "react";
import ArrowDown from "./ArrowDown";

const HeroSection = () => {
  return (
    <div id="hero" className="section">
      <div></div>
      <div>
        <h1>Esteban Basili</h1>
        <p className="brand">
          I'm a Creative Developer and Designer with a background in
          Architecture and Building Information Modeling.
        </p>
        <p className="brand">Let's build together.</p>
      </div>
      <div className="bottomOptions">
        <div></div>
        <div></div>
        <ArrowDown goTo={"#about"} />
      </div>
    </div>
  );
};

export default HeroSection;
