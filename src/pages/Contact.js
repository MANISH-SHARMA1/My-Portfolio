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
        <div className="space-y-2 sm:space-y-0">
          <p className="flex justify-center sm:justify-normal items-center gap-2">
            <span className="text-cyan-400">
              <MdCall />
            </span>{" "}
            <a href="tel:+919634182319" className="hover:underline">
              +91-9634182319
            </a>
          </p>
          <p className="flex justify-center sm:justify-normal items-center gap-2">
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
          <p className="flex justify-center sm:justify-normal items-center gap-2">
            <span className="text-cyan-400">
              <MdEmail />
            </span>{" "}
            <a
              href="mailto:sharmanish2109@gmail.com?subject=Hello%20Manish&body=I%20would%20like%20to%20discuss%20your%20portfolio"
              className="hover:underline"
            >
              sharmanish2109@gmail.com
            </a>
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
