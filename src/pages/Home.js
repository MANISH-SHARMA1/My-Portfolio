import { useEffect } from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin, SiCodechef } from "react-icons/si";
import { MdCall, MdEmail } from "react-icons/md";
import Card from "../components/Card";
import manishImg from "../assets/Manish.png";
import ProjectCard from "../components/ProjectCard";
import { PiWhatsappLogo } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { card, project, techStack } from "../utils/data";

gsap.registerPlugin(ScrollTrigger);

function Home() {

  useEffect(() => {
    gsap.to(".header", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  const repeatedTechStack = [...techStack, ...techStack];

  return (
    <div
      id="manisharma"
      className="max-w-screen-2xl mx-auto text-white overflow-x-hidden scroll-mt-20 sm:scroll-mt-28"
    >
      {/* TOP SECTION */}
      <section className="flex flex-col-reverse mx-5 sm:flex-row sm:items-center -mt-16 sm:-mt-0">
        <div className="sm:flex-1 flex flex-col gap-2">
          <p className="header translate-y-[100%] drop-shadow-md opacity-0">
            Hi, It's Me
          </p>
          <p className="header translate-y-[100%] drop-shadow-md opacity-0">
            I'm{" "}
            <span className="text-cyan-400 text-2xl font-semibold">
              Manish Sharma
            </span>
          </p>
          <p className="text-xs tracking-widest header translate-y-[100%] drop-shadow-md opacity-0">
            I'm a dedicated MERN stack developer with hands-on experience in
            building and delivering dynamic web applications. In my recent
            project, I successfully integrated MongoDB, Express.js, React.js,
            Next.js and Node.js into a cohesive, user-friendly product that met
            client needs and exceeded expectations. I take pride in crafting
            scalable, efficient solutions that drive real impact.
          </p>
          <div className="flex gap-5 items-center mt-1 header translate-y-[100%] drop-shadow-md opacity-0">
            <a
              href="https://github.com/MANISH-SHARMA1/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <VscGithub />
            </a>
            <a
              href="http://www.linkedin.com/in/manish-sharma-4ba39520b"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>

        <div className="sm:flex-1 flex justify-center mb-5 sm:mb-0 header translate-y-[100%] drop-shadow-md opacity-0">
          <div>
            <img src={manishImg} alt="Manish Img" className="size-64" />
            <div className="border-b-2 border-cyan-400 -mt-14 ml-8"></div>
          </div>
        </div>
      </section>

      {/* MIDDLE SECTION */}
      <section className="flex flex-col mx-5 sm:flex-row sm:items-center my-5">
        <div className="flex-1 flex justify-center header translate-y-[100%] drop-shadow-md opacity-0">
          <SiCodechef size={130} />
        </div>

        <div className="sm:flex-1 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold header translate-y-[100%] drop-shadow-md opacity-0">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-xs tracking-widest header translate-y-[100%] drop-shadow-md opacity-0">
            With a strong focus on both frontend and backend development, I
            bring creativity and technical skill to every project. My commitment
            to learning and innovation drives me to deliver high-quality,
            impactful work.
          </p>
          <p className="flex items-center gap-1 text-sm tracking-wider header translate-y-[100%] drop-shadow-md opacity-0">
            <span className="text-cyan-400">
              <MdCall />
            </span>{" "}
            <a href="tel:+919634182319" className="hover:underline">
              +91-9634182319
            </a>
          </p>
          <p className="flex items-center gap-1 text-sm tracking-wider header translate-y-[100%] drop-shadow-md opacity-0">
            <span className="text-cyan-400">
              <PiWhatsappLogo />
            </span>{" "}
            <a
              href="https://wa.me/919634182319?text=Hello%20there%2C%20I%20would%20like%20to%20inquire%20about..."
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91-9634182319
            </a>
          </p>
          <a
            href="http://www.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm tracking-wider header translate-y-[100%] drop-shadow-md opacity-0"
          >
            {" "}
            <span className="text-cyan-400">
              <MdEmail />
            </span>{" "}
            <a
              href="mailto:sharmanish2109@gmail.com?subject=Hello%20Manish&body=I%20would%20like%20to%20discuss%20your%20portfolio"
              className="hover:underline"
            >
              sharmanish2109@gmail.com
            </a>
          </a>
        </div>
      </section>

      <p
        id="techStack"
        className="scroll-mt-24 sm:scroll-mt-28 text-2xl font-semibold text-center my-10 header translate-y-[100%] drop-shadow-md opacity-0"
      >
        Tech <span className="text-cyan-400">Stack</span>
      </p>

      <div className="relative overflow-hidden w-full">
        <div className="flex w-max animate-scroll whitespace-nowrap">
          {repeatedTechStack.map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-2 justify-center min-w-[200px] h-[120px] text-white m-2 items-center text-xl font-semibold"
            >
              <img
                src={card.img}
                className="size-20 rounded-full"
                alt={card.content}
              />
              <p className="text-xs">{card.content}</p>
            </div>
          ))}
        </div>
      </div>

      <p
        id="experience"
        className="scroll-mt-24 sm:scroll-mt-28 text-2xl font-semibold text-center my-10 header translate-y-[100%] drop-shadow-md opacity-0"
      >
        Ex<span className="text-cyan-400">perience</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
        {card.map((data, idx) => (
          <Card data={data} key={idx} />
        ))}
      </div>

      <p className="text-2xl font-semibold text-center my-10">
        Pro<span className="text-cyan-400">ject</span>
      </p>

      <div className="flex flex-col gap-5 md:gap-5 md:flex-row md:justify-around items-center mt-5 mb-40 mx-5">
        {project.map((data, idx) => (
          <ProjectCard project={data} key={idx} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Home;
