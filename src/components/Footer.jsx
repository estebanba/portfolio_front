import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footerSection">
      <hr></hr>
      <footer>
        <div>
          <ul>
            <li>© 2022-present. Esteban Basili. All Rights Reserved</li>
          </ul>
        </div>
        <div className="footerRight">
          <ul>
            <li className="nav">
              <Link to="/about">me@estebanbasili.com</Link>
            </li>
            <li className="nav">
              <Link
                smooth
                to={{
                  hash: "#work",
                  pathname: "/work",
                }}
              >
                LinkedIn
              </Link>
            </li>
            <li className="nav">
              <Link to="/about">GitHub</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
