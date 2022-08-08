import React from "react";
import { HashLink } from "react-router-hash-link";
import arrowDown from "../assets/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import { scrollWithOffset } from "../utils/scrollWithOffset";

const ArrowDown = ({ goTo }) => {
  return (
    <HashLink smooth to={goTo} scroll={scrollWithOffset}>
      <img className="arrowSection" src={arrowDown} alt="scroll down" />
    </HashLink>
  );
};

export default ArrowDown;
