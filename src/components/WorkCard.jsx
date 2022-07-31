import React from "react";

const WorkCard = ({ project }) => {
  return (
    <div className="card">
      <h3>{project.name}</h3>
      <h4>{project.type}</h4>
      <p>{project.created}</p>
      <div>
        {project.technologies &&
          project.technologies.map((technology) => (
            <span>{technology} | </span>
          ))}
      </div>
      <p>{project.description}</p>
      <img
        className="cardImg"
        src={require(`../assets/images/${project.images[0]}`)}
        alt={project.images[0]}
      />
      <p>{project.comments}</p>
      <p>{project.credits}</p>
      <a href={project.github} target="_blank" rel="noreferrer">
        go to repository
      </a>
      <br />
      <a href={project.linkSite} target="_blank" rel="noreferrer">
        go to app
      </a>
    </div>
  );
};

export default WorkCard;
