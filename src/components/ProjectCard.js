import React, { useEffect, useRef } from "react";
import { SiCodeproject } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;

    const isSmallScreen = window.innerWidth < 768; // Tailwind md = 768px
    const direction = index % 2 === 0 ? -100 : 100;
    const finalDirection = isSmallScreen ? direction : (index % 2 === 0 ? -100 : 100);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      element,
      { opacity: 0, x: finalDirection },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{ backgroundColor: "rgb(14, 54, 70)" }}
      className="w-full rounded p-5 w-80 space-y-2 opacity-0 transform"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="text-cyan-400 flex justify-between">
          <p><SiCodeproject /></p>
          <p>{project.name} <span className="text-white">Website</span></p>
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
