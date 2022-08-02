import React from "react";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div id="headerSection">
      <header>
        <div>
          <ul>
            <li>
              <Link to="/">Esteban Basili</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="nav">
              <Link to="/about">About</Link>
            </li>
            <li className="nav">
              <Link
                smooth
                to={{
                  hash: "#work",
                  pathname: "/work",
                }}
              >
                Work
              </Link>
            </li>
            <li className="nav">
              <HashLink
                smooth
                to={{
                  hash: "#contact",
                  pathname: "/",
                }}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </header>
      <hr></hr>
    </div>
  );
};

export default Header;
