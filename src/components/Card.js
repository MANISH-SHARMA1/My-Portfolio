import React, { useEffect, useRef } from "react";
import { SiCodechef } from "react-icons/si";
import gsap from "gsap";
import { TbExternalLink } from "react-icons/tb";

function Card({ data }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = cardRef.current.querySelectorAll(".text-animate")

      gsap.set(texts, {
        y: 40,
        opacity: 0
      })

      gsap.to(texts, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%",
          once: true,
          invalidateOnRefresh: true,
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className="rounded p-5 space-y-4 bg-[rgb(14,54,70)]"
      >
        <div className="flex justify-between items-center">
          <SiCodechef className="text-2xl text-animate" />
          <p className="text-cyan-400 text-animate">
            {data?.name}{" "}
            <span className="text-white">{data.applicationType}</span>
          </p>
        </div>
        <div className="flex gap-5 text-xs">
          <div className="space-y-4 text-cyan-400">
            <p className="text-animate">Role:</p>
            <p className="text-animate">Tech Stack:</p>
            <p className="text-animate">Date:</p>
            <p className="text-animate">Link:</p>
          </div>
          <div className="space-y-4">
            <p className="text-animate">{data?.role}</p>
            <p className="text-animate">{data?.techStack}</p>
            <p className="text-animate">{data?.date}</p>
            <div className="text-animate">
              <a 
                href={data.link} 
                target="_blank"
                rel="noreferrer"
              >
              {data.link ? <TbExternalLink /> : "Not Available"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
