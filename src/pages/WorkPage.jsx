import React, { useContext, useEffect, useState } from "react";
import WorkCard from "../components/WorkCard";
import { WorkContext } from "../context/WorkContext";

const WorkPage = () => {
  const { work } = useContext(WorkContext);

  return (
    <div>
      <div className="grid">
        {work &&
          work.length > 0 &&
          work.map((project) => (
            <WorkCard project={project} key={project.code} />
          ))}
      </div>
    </div>
  );
};

export default WorkPage;
