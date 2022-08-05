import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WorkContext } from "../context/WorkContext";
import WorkThumbnail from "./WorkThumbnail";
import arrowRight from "../assets/icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg";
import arrowLeft from "../assets/icons/chevron_left_FILL0_wght400_GRAD0_opsz48.svg";
import ArrowDown from "./ArrowDown";

const WorkSection = () => {
  const { work } = useContext(WorkContext);

  function slide(direction) {
    let container = document.getElementById("workScroll");
    let scrollCompleted = 0;
    let slideVar = setInterval(function () {
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
      <h2>RECENT WORK</h2>
      <p>Swipe or drag to see the latest projects I have worked on.</p>
      <div className="scrollContainer">
        <div id="workScroll">
          {work &&
            work.length > 0 &&
            [...work]
              .reverse()
              .map((project) => (
                <WorkThumbnail project={project} key={project.code} />
              ))}
          <button
            className="swipeBtn leftFloat"
            type="button"
            onMouseOver={() => slide("left")}
            onClick={() => slide("left")}
          >
            <img src={arrowLeft} alt="<" />
          </button>
          <button
            className="swipeBtn rightFloat"
            type="button"
            onMouseOver={() => slide("right")}
            onClick={() => slide("right")}
          >
            <img src={arrowRight} alt=">" />
          </button>
        </div>
        <p>
          <Link to="/work">See full section</Link>
        </p>
      </div>

      <div className="centered">
        <ArrowDown goTo={"#contact"} />
      </div>
    </div>
  );
};

export default WorkSection;
