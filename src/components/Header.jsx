import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div id="headerSection">
      <header>
        <div>
          <ul>
            <li>
              <HashLink
                smooth
                to={{
                  hash: "#",
                  pathname: "/",
                }}
              >
                Esteban Basili
              </HashLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
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
              <Link to="/about">About</Link>
            </li>
            <li className="nav">
              <Link to="/hireme">Hire Me</Link>
            </li>
            <li className="nav">
              <HashLink
                smooth
                to={{
                  hash: "#contact",
                  pathname: "/",
                }}
                scroll={scrollWithOffset}
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
