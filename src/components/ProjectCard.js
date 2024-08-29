import React from "react";
import { SiCodeproject } from "react-icons/si";

function ProjectCard({project}) {
  return (
    <div
      style={{ backgroundColor: "rgb(14, 54, 70)" }}
      className="rounded p-5 w-80"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-cyan-400 flex justify-between">
          <p>
            <SiCodeproject />
          </p>
          <p>
            {project.name} <span className="text-white">Website</span>
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
