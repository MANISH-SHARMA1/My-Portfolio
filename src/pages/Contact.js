import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { PiWhatsappLogo } from "react-icons/pi";
import { MdCall, MdEmail, MdConnectWithoutContact } from "react-icons/md";

function Contact() {
  return (
    <div className="text-white">
      <div className="text-cyan-400 flex justify-center">
        <MdConnectWithoutContact size={300} />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-around my-5">
        <div>
          <p className="flex justify-center sm:justify-normal items-center gap-2">
            <span className="text-cyan-400">
              <MdCall />
            </span>{" "}
            +91-9634182319
          </p>
          <p className="flex justify-center sm:justify-normal items-center gap-2">
            <span className="text-cyan-400">
              <PiWhatsappLogo />
            </span>{" "}
            +91-9634182319
          </p>
          <p className="flex justify-center sm:justify-normal items-center gap-2">
            <span className="text-cyan-400">
              <MdEmail />
            </span>{" "}
            sharmanish2109@gmail.com
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg">Social Accounts</p>
          <div className="flex justify-center gap-10 sm:justify-around text-cyan-400 mt-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <VscGithub size={19} />
            </a>

            <a
              href="http://www.linkedin.com/in/manish-sharma-4ba39520b"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <SiLinkedin size={19} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
