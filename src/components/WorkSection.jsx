import React, { useContext } from "react";
import { WorkContext } from "../context/WorkContext";
import WorkThumbnail from "./WorkThumbnail";
import arrowRight from "../assets/icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg";
import arrowLeft from "../assets/icons/chevron_left_FILL0_wght400_GRAD0_opsz48.svg";
import ArrowDown from "./ArrowDown";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../utils/scrollWithOffset";

const WorkSection = () => {
  const { work } = useContext(WorkContext);

  function slide(direction) {
    let container = document.getElementById("workScroll");
    let scrollCompleted = 0;
    let slideVar = setInterval(function() {
      if (direction === "left") {
        container.scrollLeft -= 10;
      } else {
        container.scrollLeft += 10;
      }
      scrollCompleted += 5;
      if (scrollCompleted >= 150) {
        window.clearInterval(slideVar);
      }
    }, 25);
  }

  return (
    <div id="work" className="section">
      <h2>WORK</h2>
      <p>Some of my most recent projects.</p>
      <div className="scrollContainer">
        <div id="workScroll">
          {work &&
            work.length > 0 &&
            [...work]
              .reverse()
              .map((project) => (
                <WorkThumbnail project={project} key={project.code} />
              ))}
        </div>
        <div className="swipeBar">
          <button
            className="swipeButton"
            type="button"
            onMouseOver={() => slide("left")}
            onClick={() => slide("left")}
          >
            <img src={arrowLeft} alt="<" />
          </button>
          <span>Swipe or drag left or right</span>
          <button
            className="swipeButton"
            type="button"
            onMouseOver={() => slide("right")}
            onClick={() => slide("right")}
          >
            <img src={arrowRight} alt=">" />
          </button>
        </div>
      </div>
      <div className="bottomOptions">
        <div>
          <p>
            <HashLink
              smooth
              to={{
                hash: "#",
                pathname: "/work",
              }}
              scroll={scrollWithOffset}
            >
              See all
            </HashLink>
          </p>
        </div>
        <div>
          <ArrowDown goTo={"#contact"} />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
