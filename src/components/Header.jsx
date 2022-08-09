import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import MenuNav from "./MenuNav";
import { useMediaQuery } from "react-responsive";
import MenuMobile from "./MenuMobile";
import { useLocation } from "react-router-dom";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <div id="header">
      <header>
        <div className="logo">
          <ul>
            <li>
              {(location.pathname !== "/" || location.hash !== "") && (
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
              )}
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
