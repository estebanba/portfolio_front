import React from "react";
import { Link } from "react-router-dom";

const WorkThumbnail = ({ project }) => {
  return (
    <Link className="noDecoration scroller" to={`/work#${project.code}`}>
      <div className="scrollCard">
        <h3>{project.name}</h3>
        <p>{project.type}</p>
        <img
          src={require(`../assets/images/${project.images[0]}`)}
          alt={project.images[0]}
        />
      </div>
    </Link>
  );
};

export default WorkThumbnail;
