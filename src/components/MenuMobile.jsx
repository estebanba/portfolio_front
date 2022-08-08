import React from "react";
import MenuNav from "./MenuNav";

const MenuMobile = ({ setMenuOpen, menuOpen }) => {
  return (
    <div>
      {menuOpen && (
        <div className="menuMobile">
          <MenuNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
