import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div id="aboutSection">
      <h2>ABOUT ME</h2>
      <div>
        <p>
          I`m a Full Stack Web Developer with a sensibility for human-centred
          design, user experience and multidisciplinarity as key values to
          create meaningful and impactful products.
        </p>
        <p>
          I am also an Architect sharing my passion about technology,
          digitalization and data driven design, which I believe are essential
          to bring the built environment to the 21th century.
        </p>
      </div>
      <p>
        <Link to="/about">See full section</Link>
      </p>
    </div>
  );
};

export default AboutSection;
