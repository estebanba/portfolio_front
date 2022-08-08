import React from "react";
import { HashLink } from "react-router-hash-link";

const MenuNav = ({ setMenuOpen, menuOpen }) => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

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
            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
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
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </HashLink>
        </li>
        <li className="menuItem">
          <HashLink
            smooth
            to={{
              hash: "#contact",
              pathname: "/",
            }}
            scroll={scrollWithOffset}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
