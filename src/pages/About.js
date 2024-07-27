import React from "react";
import { PiGraduationCapBold, PiCertificateBold } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import { SiCodeproject } from "react-icons/si";
import certificate from "../assets/MERN_certificate.png";

function About() {
  return (
    <>
      <div className="text-white">
        {/* EDUCATION SECTION */}
        <section>
          <p className="text-center text-cyan-400 text-2xl font-semibold">
            Education
          </p>

          <div className="flex flex-col gap-5 md:gap-5 md:flex-row md:justify-around items-center my-5">
            <div
              style={{ backgroundColor: "rgb(14, 54, 70)" }}
              className="rounded p-5 w-80"
            >
              <div className="text-xl flex item-center justify-between">
                <p className="text-cyan-400">
                  <PiGraduationCapBold />
                </p>
                <p>
                  Graduation <span className="text-cyan-400">(2023)</span>
                </p>
              </div>
              <p>
                Choudhary Charan Singh University,{" "}
                <span className="text-cyan-400">Meerut, Uttar Pradesh</span>
              </p>
              <p>
                <span className="text-cyan-400">Aggregation:</span> 74.5%
              </p>
            </div>

            <div
              style={{ backgroundColor: "rgb(14, 54, 70)" }}
              className="rounded p-5 w-80"
            >
              <div className="text-xl flex item-center justify-between">
                <p className="text-cyan-400">
                  <LuSchool />
                </p>
                <p>
                  Intermediate <span className="text-cyan-400">(2019)</span>
                </p>
              </div>
              <p>
                Central Board of Secondary Education{" "}
                <span className="text-cyan-400">Saharanpur, Uttar Pradesh</span>
              </p>
              <p>
                <span className="text-cyan-400">Aggregation:</span> 70%
              </p>
            </div>

            <div
              style={{ backgroundColor: "rgb(14, 54, 70)" }}
              className="rounded p-5 w-80"
            >
              <div className="text-xl flex item-center justify-between">
                <p className="text-cyan-400">
                  <LuSchool />
                </p>
                <p>
                  High School <span className="text-cyan-400">(2017)</span>
                </p>
              </div>
              <p>
                Central Board of Secondary Education{" "}
                <span className="text-cyan-400">Saharanpur, Uttar Pradesh</span>
              </p>
              <p>
                <span className="text-cyan-400">Aggregation:</span> 70%
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section>
          <p className="text-center text-cyan-400 text-2xl font-semibold">
            Certificates
          </p>
          <div className="flex justify-center  my-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-cyan-400">
                  <PiCertificateBold size={23} />
                </p>{" "}
                <p>
                  Full Stack Development Course using{" "}
                  <span className="text-cyan-400">MERN</span>
                </p>
              </div>
              <img
                src={certificate}
                alt="certificate"
                className="w-96 border-2 border-amber-600 rounded"
              />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <p className="text-center text-cyan-400 text-2xl font-semibold">
            Projects
          </p>

          <div className="flex flex-col gap-5 md:gap-5 md:flex-row md:justify-around items-center my-5">
            <div
              style={{ backgroundColor: "rgb(14, 54, 70)" }}
              className="rounded p-5 w-80"
            >
              <a
                href="https://github.com/MANISH-SHARMA1/Social-Media"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-cyan-400 flex justify-between">
                  <p>
                    <SiCodeproject />
                  </p>
                  <p>
                    Social Media <span className="text-white">Website</span>
                  </p>
                </div>
              </a>
            </div>

            <div
              style={{ backgroundColor: "rgb(14, 54, 70)" }}
              className="rounded p-5 w-80"
            >
              <a
                href="https://github.com/MANISH-SHARMA1/Ecommerce-application-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-cyan-400 flex justify-between">
                  <p>
                    <SiCodeproject />
                  </p>
                  <p>
                    Ecommerce <span className="text-white">Website</span>
                  </p>
                </div>
              </a>{" "}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
