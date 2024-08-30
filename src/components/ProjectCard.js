import React from "react";
import { SiCodeproject } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";

function ProjectCard({ project }) {
  return (
    <div
      style={{ backgroundColor: "rgb(14, 54, 70)" }}
      className="rounded p-5 w-80 space-y-2"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="text-cyan-400 flex justify-between">
          <p>
            <SiCodeproject />
          </p>
          <p>
            {project.name} <span className="text-white">Website</span>
          </p>
        </div>
      </a>
      <div className="flex justify-between items-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1"
        >
          <FaCode />
          <span className="text-xs underline">Code</span>
        </a>

        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1"
        >
          <MdOutlineLiveTv />
          <span className="text-xs underline">Live</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
