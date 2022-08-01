import React from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection.jsx";

const HomePage = () => {
  return (
    <div className="scroller">
      <section>
        <HeroSection />
      </section>
      <hr></hr>
      <section>
        <WorkSection />
      </section>
      <hr></hr>
      <section>
        <AboutSection />
      </section>
      <hr></hr>
    </div>
  );
};

export default HomePage;
