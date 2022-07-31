import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
