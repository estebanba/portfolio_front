import React, { useState } from "react";

import { HashLink } from "react-router-hash-link";
import MenuNav from "./MenuNav";
import { useMediaQuery } from "react-responsive";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

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
                onClick={() => {
                  if (menuOpen === true) {
                    setMenuOpen(false);
                  }
                }}
              >
                Esteban Basili
              </HashLink>
            </li>
          </ul>
        </div>
        {!isMobile && <MenuNav />}
        {isMobile && (
          <>
            <button onClick={handleToggle} className="hamburger">
              {menuOpen ? "Close" : "Menu"}
            </button>
          </>
        )}
      </header>
      <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <hr></hr>
    </div>
  );
};

export default Header;
