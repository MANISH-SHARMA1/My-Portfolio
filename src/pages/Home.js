import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin, SiCodechef } from "react-icons/si";
import { MdCall, MdEmail } from "react-icons/md";
import Message from "../components/Message";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      <div className="text-white">
        {/* TOP SECTION */}
        <section className="flex flex-col-reverse mx-5 sm:mx-2 sm:flex-row sm:justify-around my-5">
          <div>
            <p>Hi, It's Me</p>
            <p>
              I'm{" "}
              <span className="text-cyan-400 text-2xl font-semibold">
                Manish Sharma
              </span>
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              soluta.
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

          <div className="flex justify-center sm:block">
            <SiCodechef size={150} />
          </div>
        </section>

        {/* MIDDLE SECTION */}
        <section className="flex flex-col mx-5 sm:mx-2 sm:flex-row sm:justify-around my-5">
          <div className="flex justify-center sm:block">
            <SiCodechef size={130} />
          </div>

          <div>
            <div>
              <h2 className="text-2xl font-semibold">
                About <span className="text-cyan-400">Me</span>
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, quasi.
              </p>
              <p className="flex items-center gap-1">
                <span className="text-cyan-400 text-xl">
                  <MdCall />
                </span>{" "}
                +91-9634182319
              </p>
              <a
                href="http://www.gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                {" "}
                <span className="text-cyan-400 text-xl">
                  <MdEmail />
                </span>{" "}
                sharmanish2109@gmail.com
              </a>
            </div>
          </div>
        </section>

        <p className="text-2xl font-semibold text-center my-5">
          Project & <span className="text-cyan-400">Review</span>
        </p>

        <div className="overflow-x-auto hideScrollbar">
          <div className="flex gap-5 text-center my-5 w-max">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <section>
          <p className="text-2xl font-semibold text-center my-5">
            Leave <span className="text-cyan-400">Message</span>
          </p>
          <Message />
        </section>
      </div>
    </div>
  );
}

export default Home;
