import React from "react";
import ArrowDown from "./ArrowDown";

const HeroSection = () => {
  return (
    <div id="hero">
      <div>
        <h1>Esteban Basili</h1>
        <p className="brand">
          I'm a creative developer and designer with a background in
          Architecture and Building Information Modeling. Let's build together!
        </p>
      </div>
      <div className="centered">
        <ArrowDown goTo={"#about"} />
      </div>
    </div>
  );
};

export default HeroSection;
