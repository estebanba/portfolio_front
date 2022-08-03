import React from "react";
import { Link } from "react-router-dom";

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
        <div className="footerRight">
          <ul>
            <li className="nav">
              <Link to="/about">me@estebanbasili.com</Link>
            </li>
            <li className="nav">
              <a
                href="https://www.linkedin.com/in/estebanbasili/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="nav">
              <a
                href="https://www.instagram.com/estebanbasili"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="nav">
              <a
                href="https://github.com/estebanba"
                target="_blank"
                rel="noreferrer"
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
