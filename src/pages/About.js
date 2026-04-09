import { useEffect, useRef } from "react";
import { PiCertificateBold } from "react-icons/pi";
import certificate from "../assets/MERN_certificate.png";
import aartickExperience from "../assets/AartickExperienceLetter.jpg"
import ProjectCard from "../components/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education, project } from "../utils/data";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const educationRef = useRef(null);

  useEffect(() => {
    const cards = educationRef.current.querySelectorAll(".edu-card");
    const isSmallScreen = window.innerWidth < 768;

    cards.forEach((card, idx) => {
      const direction = isSmallScreen ? (idx % 2 === 0 ? -100 : 100) : 100;

      gsap.fromTo(
        card,
        { x: direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: isSmallScreen ? 0 : idx * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="text-white overflow-x-hidden">
        {/* EDUCATION SECTION */}
        <section>
          <p className="text-center text-2xl font-semibold">
            Edu<span className="text-cyan-400">cation</span>
          </p>

          <div
            ref={educationRef}
            className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5"
          >
            {education.map((education, index) => (
              <div
                key={index}
                style={{ backgroundColor: "rgb(14, 54, 70)" }}
                className="edu-card rounded p-5 opacity-0 space-y-1"
              >
                <div className="text-xl flex item-center justify-between">
                  <p className="text-cyan-400">
                    {education.icon}
                  </p>
                  <p>
                    {education.qualification} <span className="text-cyan-400">({education.qualifiedYear})</span>
                  </p>
                </div>
                <p>
                  {education.organisation},{" "}
                  <span className="text-cyan-400 text-sm">
                    {education.organisationPlace}
                  </span>
                </p>
                <p>
                  <span className="text-cyan-400 text-sm">Aggregation:</span>{" "}
                  {education.aggregation} {education.aggregationType}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section className="flex flex-col items-center justify-center gap-5">
          <p className="text-2xl font-semibold">
            Certifi<span className="text-cyan-400">cates</span>
          </p>
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-cyan-400">
                  <PiCertificateBold size={23} />
                </p>{" "}
                <p className="text-xs sm:text-base">
                  Full Stack Developer Intern at{" "}
                  <span className="text-cyan-400">Aartick Technologies</span>
                </p>
              </div>
              <img
                src={aartickExperience}
                alt="aartickExperience"
                className="w-[400px] sm:w-[500px] border-2 border-amber-600 rounded"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-cyan-400">
                  <PiCertificateBold size={23} />
                </p>{" "}
                <p className="text-xs sm:text-base">
                  Full Stack Web Development Course using{" "}
                  <span className="text-cyan-400">MERN</span>
                </p>
              </div>
              <img
                src={certificate}
                alt="certificate"
                className="w-[400px] sm:w-[500px] border-2 border-amber-600 rounded"
              />
            </div>
        </section>

        {/* PROJECTS */}
        <section>
          <p className="mt-5 text-center text-2xl font-semibold">
            Pro<span className="text-cyan-400">jects</span>
          </p>

          <div className="flex flex-col gap-5 md:gap-5 md:flex-row md:justify-around items-center mt-5 mb-40 mx-5">
            {project.map((data, idx) => (
              <ProjectCard project={data} key={idx} index={idx} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
