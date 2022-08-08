import React from "react";
import { HashLink } from "react-router-hash-link";
import arrowUp from "../assets/icons/expand_less_FILL0_wght400_GRAD0_opsz48.svg";

const ArrowUp = ({ goTo }) => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className="bottomOptions">
      <div></div>
      <div>
        <HashLink smooth to={goTo} scroll={scrollWithOffset}>
          <img className="arrowSection" src={arrowUp} alt="scroll down" />
        </HashLink>
      </div>
    </div>
  );
};

export default ArrowUp;
