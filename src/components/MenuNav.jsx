import React from "react";
import { HashLink } from "react-router-hash-link";

const MenuNav = () => {
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
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
