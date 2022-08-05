import React, { useContext } from "react";
import WorkCard from "../components/WorkCard";
import { WorkContext } from "../context/WorkContext";

const WorkPage = () => {
  const { work } = useContext(WorkContext);

  return (
    <div id="work" className="page">
      <h2>WORK</h2>
      <div className="grid">
        {work &&
          work.length > 0 &&
          [...work]
            .reverse()
            .map((project) => (
              <WorkCard project={project} key={project.code} />
            ))}
      </div>
      <br></br>
    </div>
  );
};

export default WorkPage;
