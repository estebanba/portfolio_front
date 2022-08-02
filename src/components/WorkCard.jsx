import React from "react";

const WorkCard = ({ project }) => {
  return (
    <div className="card" id={project.key}>
      <h3>{project.name}</h3>
      <hr></hr>
      <h4>{project.type}</h4>

      <div className="cardLine">
        {project.technologies &&
          project.technologies.map((technology) => (
            <span className="chip">{technology}</span>
          ))}
      </div>
      <p className="cardLine">{project.description}</p>
      <img
        src={require(`../assets/images/${project.images[0]}`)}
        alt={project.images[0]}
      />
      <p className="cardLine">{project.comments}</p>
      <p className="cardLine">{project.credits}</p>
      <hr></hr>
      <div className="linksBar RightSmall">
        <a href={project.github} target="_blank" rel="noreferrer">
          go to repository
        </a>

        <a href={project.linkSite} target="_blank" rel="noreferrer">
          go to app
        </a>
      </div>

      {/* <p>{project.created}</p> */}
    </div>
  );
};

export default WorkCard;
