import React from "react";

const Footer = () => {
  return (
    <div id="footerSection">
      <hr></hr>
      <footer>
        <div>
          <ul>
            <li>© 2022-present. Esteban Basili.</li>
          </ul>
        </div>
        <div className="footerNav">
          <ul>
            <li className="nav">
              <a
                style={{ color: "inherit" }}
                href="mailto:me@estebanbasili.com"
              >
                me@estebanbasili.com
              </a>
            </li>
            <li className="nav">
              <a
                href="../assets/files/CV_2022_EstebanBasili_EN.pdf"
                target="blank"
              >
                Download CV
              </a>
            </li>
            <li className="nav">
              <a
                href="https://www.linkedin.com/in/estebanbasili/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav">
              <a
                href="https://www.instagram.com/estebanbasili"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="nav">
              <a
                href="https://github.com/estebanba"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
