import React from "react";

import { HashLink } from "react-router-hash-link";
import MenuNav from "./MenuNav";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  return (
    <div id="header">
      <header>
        <div className="logo">
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
        {!isMobile && <MenuNav />}
        {isMobile && (
          <button className="hamburger">
            <span className="openMenu">Menu</span>
            <span className="closeMenu">Close</span>
          </button>
        )}
      </header>
      <hr></hr>
    </div>
  );
};

export default Header;
