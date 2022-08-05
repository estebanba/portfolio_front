import React from "react";
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
              <HashLink
                smooth
                to={{
                  hash: "#",
                  pathname: "/about",
                }}
                scroll={scrollWithOffset}
              >
                About
              </HashLink>
            </li>
            <li className="nav">
              <HashLink
                smooth
                to={{
                  hash: "#",
                  pathname: "/work",
                }}
                scroll={scrollWithOffset}
              >
                Work
              </HashLink>
            </li>
            <li className="nav">
              <HashLink
                smooth
                to={{
                  hash: "#",
                  pathname: "/hireme",
                }}
                scroll={scrollWithOffset}
              >
                Hire Me
              </HashLink>
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
