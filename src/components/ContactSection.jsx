import React from "react";
import ArrowDown from "./ArrowDown";

const ContactSection = () => {
  return (
    <div id="contact" className="section">
      <h2>CONTACT</h2>
      <div className="sectionContent">
        <address className="contentBox">
          <p>Get in touch</p>
          <p>Let's talk</p>

          <p>Thanks for your visit and interest in my personal site</p>
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
              rel="noreferrer"
            >
              Instagram
            </a>{" "}
            ,{" "}
            <a
              href="https://www.linkedin.com/in/estebanbasili/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/estebanba"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </address>
        <div></div>
      </div>
      <div className="centered">
        <ArrowDown goTo={"#top"} />
      </div>
    </div>
  );
};

export default ContactSection;
