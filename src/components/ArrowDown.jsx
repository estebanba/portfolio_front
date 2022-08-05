import React from "react";
import { HashLink } from "react-router-hash-link";
import arrowDown from "../assets/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg";

const ArrowDown = ({ goTo }) => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <HashLink smooth to={goTo} scroll={scrollWithOffset}>
      <img className="arrowSection" src={arrowDown} alt="scroll down" />
    </HashLink>
  );
};

export default ArrowDown;
