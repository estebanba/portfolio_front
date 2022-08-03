import React, { useContext, useEffect, useState } from "react";
import WorkCard from "../components/WorkCard";
import { WorkContext } from "../context/WorkContext";

const WorkPage = () => {
  const { work } = useContext(WorkContext);

  return (
    <div>
      <section>
        <h2 id="work">WORK</h2>
        <div className="grid">
          {work &&
            work.length > 0 &&
            [...work]
              .reverse()
              .map((project) => (
                <WorkCard project={project} key={project.code} />
              ))}
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
