import React from "react";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../utils/scrollWithOffset";

const MenuNav = ({ setMenuOpen, menuOpen }) => {
  return (
    <nav className="menu">
      <ul className="menuList">
        <li className="menuItem">
          <HashLink
            smooth
            to={{
              hash: "#",
              pathname: "/about",
            }}
            scroll={scrollWithOffset}
            onClick={() => {
              if (menuOpen === true) {
                setMenuOpen(false);
              }
            }}
          >
            About
          </HashLink>
        </li>
        <li className="menuItem">
          <HashLink
            smooth
            to={{
              hash: "#",
              pathname: "/work",
            }}
            scroll={scrollWithOffset}
            onClick={() => {
              if (menuOpen === true) {
                setMenuOpen(false);
              }
            }}
          >
            Work
          </HashLink>
        </li>
        <li className="menuItem">
          <HashLink
            smooth
            to={{
              hash: "#",
              pathname: "/hireme",
            }}
            scroll={scrollWithOffset}
            onClick={() => {
              if (menuOpen === true) {
                setMenuOpen(false);
              }
            }}
          >
            Hire Me
          </HashLink>
        </li>
        <li className="menuItem">
          <HashLink
            smooth
            to={{
              hash: "#",
              pathname: "/contact",
            }}
            scroll={scrollWithOffset}
            onClick={() => {
              if (menuOpen === true) {
                setMenuOpen(false);
              }
            }}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
