import React from "react";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../utils/scrollWithOffset";

const WorkThumbnail = ({ project }) => {
  return (
    <HashLink
      className="noDecoration scroller"
      smooth
      to={{
        hash: `#${project.code}`,
        pathname: `/work`,
      }}
      scroll={scrollWithOffset}
      // onClick={() => {
      //   if (menuOpen === true) {
      //     setMenuOpen(false);
      //   }
      // }}
    >
      <div className="scrollCard">
        <h3>{project.name}</h3>
        <p>{project.type}</p>
        <img
          src={require(`../assets/images/${project.images[0]}`)}
          alt={project.images[0]}
        />
      </div>
    </HashLink>
  );
};

export default WorkThumbnail;
