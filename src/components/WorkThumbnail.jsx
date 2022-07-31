import React from "react";

const WorkThumbnail = ({ project }) => {
  return (
    <div className="scrollCard">
      <h3>{project.name}</h3>
      <h4>{project.type}</h4>
      <img
        className="cardImg"
        src={require(`../assets/images/${project.images[0]}`)}
        alt={project.images[0]}
      />
    </div>
  );
};

export default WorkThumbnail;
