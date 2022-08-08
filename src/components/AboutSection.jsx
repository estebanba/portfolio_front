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
            My work focuses on building experiences that make a good impact and,
            after many years in architecture and design, I know what's needed to
            make products and experiences possible, functional and beautiful.
          </p>
          <p>
            Based in Berlin, Germany, I can connect globally with teams to
            create digital excellence. Do you have a project in mind? I am
            always on the lookout for interesting collaborations.
          </p>
          <p>
            You can read more <Link to="/about">about</Link> who I am and what I
            have been up to until now. For a more technical approach please
            check my{" "}
            <a
              href="https://github.com/estebanba"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            If you would like to get in touch with me about possible
            collaborations,{" "}
            <a style={{ color: "inherit" }} href="mailto:me@estebanbasili.com">
              email me
            </a>{" "}
            and we'll talk.
          </p>
        </div>
        <div className="contentBox"></div>
      </div>
      <div className="bottomOptions">
        <div></div>
        <div>
          <ArrowDown goTo={"#work"} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
