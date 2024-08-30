import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin, SiCodechef } from "react-icons/si";
import { MdCall, MdEmail } from "react-icons/md";
// import Message from "../components/Message";
import Card from "../components/Card";
import manishImg from "../assets/Manish.png";
import ProjectCard from "../components/ProjectCard";
import { PiWhatsappLogo } from "react-icons/pi";

function Home() {
  const card = [
    {
      role: "Full Stack Developer (MERN)",
      name: "OffShop",
      techStack: "MongoDb, Mongoose, Express.js, Node.js, React.js",
      date: "06/06/2024 - 30/08/2024",
    },
  ];

  const project = [
    {
      name: "Social Media",
      link: "https://github.com/MANISH-SHARMA1/sociopedia",
      liveLink: "https://sociopedia-client-psi.vercel.app/",
    },
    {
      name: "Ecommerce",
      link: "https://github.com/MANISH-SHARMA1/Ecommerce-application-",
      liveLink: "https://github.com/MANISH-SHARMA1/Ecommerce-application-",
    },
  ];
  return (
    <div>
      <div className="text-white">
        {/* TOP SECTION */}
        <section className="flex flex-col-reverse mx-5 sm:flex-row sm:items-center -mt-16 sm:-mt-0">
          <div className="sm:flex-1 flex flex-col gap-2">
            <p>Hi, It's Me</p>
            <p>
              I'm{" "}
              <span className="text-cyan-400 text-2xl font-semibold">
                Manish Sharma
              </span>
            </p>
            <p className="text-xs tracking-widest">
              I'm a dedicated MERN stack developer with hands-on experience in
              building and delivering dynamic web applications. My recent
              project demonstrated my ability to integrate MongoDB, Express.js,
              React, and Node.js into a cohesive, user-friendly product that met
              client needs and exceeded expectations. I take pride in crafting
              scalable and efficient solutions that make a real impact.
            </p>
            <div className="flex gap-5 items-center mt-1">
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

          <div className="sm:flex-1 flex justify-center mb-5 sm:mb-0">
            <div>
              <img src={manishImg} alt="" className="size-64" />
              <div className="border-b-2 border-cyan-400 -mt-14 ml-8"></div>
            </div>
          </div>
        </section>

        {/* MIDDLE SECTION */}
        <section className="flex flex-col mx-5 sm:flex-row sm:items-center my-5">
          <div className="flex-1 flex justify-center">
            <SiCodechef size={130} />
          </div>

          <div className="sm:flex-1 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-xs tracking-widest">
              With a strong focus on both frontend and backend development, I
              bring creativity and technical skill to every project. My
              commitment to learning and innovation drives me to deliver
              high-quality, impactful work.
            </p>
            <p className="flex items-center gap-1 text-sm tracking-wider">
              <span className="text-cyan-400">
                <MdCall />
              </span>{" "}
              <a href="tel:+919634182319" className="hover:underline">
                +91-9634182319
              </a>
            </p>
            <p className="flex items-center gap-1 text-sm tracking-wider">
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
              className="flex items-center gap-1 text-sm tracking-wider"
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

        <p className="text-2xl font-semibold text-center my-10">
          Ex<span className="text-cyan-400">perience</span>
        </p>

        <div className="flex justify-center mx-8">
          {card.map((data, idx) => (
            <Card data={data} key={idx} />
          ))}
        </div>

        <p className="text-2xl font-semibold text-center my-10">
          Pro<span className="text-cyan-400">ject</span>
        </p>

        <div className="flex flex-col gap-5 md:gap-5 md:flex-row md:justify-around items-center my-5">
          {project.map((data, idx) => (
            <ProjectCard project={data} key={idx} />
          ))}
        </div>

        {/* <section>
          <p className="text-2xl font-semibold text-center my-5">
            Leave <span className="text-cyan-400">Message</span>
          </p>
          <Message />
        </section> */}
      </div>
    </div>
  );
}

export default Home;
