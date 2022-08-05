import React from "react";

const WorkCard = ({ project }) => {
  return (
    <div className="card" id={project.key}>
      <div>
        <h4>{project.name}</h4>
        <hr></hr>
        <h5 className="cardLineDouble">{project.type}</h5>

        <div className="cardLine">
          {project.technologies &&
            project.technologies.map((technology) => (
              <span className="chip">{technology}</span>
            ))}
        </div>
        <p className="cardLineDouble">{project.description}</p>
        <img
          src={require(`../assets/images/${project.images[0]}`)}
          alt={project.images[0]}
        />
        <p className="cardLineDouble">{project.comments}</p>
        <p className="cardLineDouble">{project.credits}</p>
      </div>
      <div>
        <hr></hr>
        <div className="linksBar RightSmall">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            go to repository
          </a>

          <a href={project.linkSite} target="_blank" rel="noopener noreferrer">
            go to app
          </a>
        </div>
      </div>

      {/* <p>{project.created}</p> */}
    </div>
  );
};

export default WorkCard;
