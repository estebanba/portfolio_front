import React from "react";
import ArrowUp from "./ArrowUp";

const ContactSection = () => {
  return (
    <div id="contact" className="section">
      <h2>CONTACT</h2>
      <div className="sectionContent">
        <address className="contentBox">
          <p>Thanks for your visit and interest in my personal site</p>
          <h4>I'm always interested about:</h4>
          <p>
            Fullstack Development, Frontend Development, Backend Development,
            BIM Management, Sustainable Architecture, Modular Architecture, New
            Businesses, Startups, Photowalks
          </p>
          <p>Have a project in mind?</p>
          <p>
            If you would like to discuss potential collaborations you can reach
            me at <a href="mailto:me@estebanbasili.com">me@estebanbasili.com</a>
          </p>
          <p>
            I can be found also on{" "}
            <a
              href="https://www.instagram.com/estebanbasili"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            ,{" "}
            <a
              href="https://www.linkedin.com/in/estebanbasili/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/estebanba"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="../assets/files/CV_2022_EstebanBasili_EN.pdf"
              target="blank"
            >
              Download CV
            </a>
          </p>
        </address>
        <div></div>
      </div>
      <div className="centered">
        <ArrowUp goTo={"#top"} />
      </div>
    </div>
  );
};

export default ContactSection;
