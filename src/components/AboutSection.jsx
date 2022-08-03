import React from "react";
import { Link } from "react-router-dom";
import ArrowDown from "./ArrowDown";

const AboutSection = () => {
  return (
    <div id="about" className="section">
      <h2>ABOUT ME</h2>
      <div className="sectionContent">
        <div className="contentBox">
          <p>
            Full Stack Web Developer with a sensibility for human-centred
            design, user experience and multidisciplinarity as key values to
            create meaningful and impactful products.
          </p>
          <p>
            Architect sharing my passion about technology, digitalization and
            data driven design, which I believe are essential to bring the built
            environment to the 21th century.
          </p>
          <p>
            You can read a bit more <Link to="/about">about</Link> me and my
            past work. Most of my personal code is on GitHub.
          </p>
          <p>
            I am available for freelance work in a consulting capacity, or as a
            tech advisor. If you would like to get in touch with me about
            working with you, email me and we'll chat!
          </p>
        </div>
        <div className="contentBox"></div>
      </div>
      <div className="centered">
        <ArrowDown goTo={"#work"} />
      </div>
    </div>
  );
};

export default AboutSection;
