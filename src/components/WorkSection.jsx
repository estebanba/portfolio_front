import React, { useContext, useEffect, useState } from "react";
import { WorkContext } from "../context/WorkContext";
import WorkThumbnail from "./WorkThumbnail";

const WorkCarousel = () => {
  const { work } = useContext(WorkContext);

  return (
    <div>
      <div className="hScroll">
        {work &&
          work.length > 0 &&
          work.map((project) => <WorkThumbnail project={project} />)}
      </div>
    </div>
  );
};

export default WorkCarousel;
