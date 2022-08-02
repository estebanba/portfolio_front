import React from "react";

const ContactSection = () => {
  return (
    <div id="contact">
      <h2>GET IN TOUCH</h2>
      <address className="sectionContent">
        <p className="contentBox">
          Thanks for your visit and interest in my personal site
        </p>
        <p className="contentBox">
          If you would like to discuss potential collaborations you can reach me
          at <a href="mailto:me@estebanbasili.com">me@estebanbasili.com</a>
        </p>
        <p className="contentBox">
          I can be found also on{" "}
          <a
            href="https://www.instagram.com/estebanbasili"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/estebanbasili/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </address>
    </div>
  );
};

export default ContactSection;
