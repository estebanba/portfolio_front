import React from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection.jsx";

const HomePage = () => {
  return (
    <div className="scroller">
      <HeroSection />
      <hr></hr>
      <AboutSection />
      <hr></hr>
      <WorkSection />
      <hr></hr>
      <ContactSection />
    </div>
  );
};

export default HomePage;
