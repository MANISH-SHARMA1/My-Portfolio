import React, { useEffect, useRef } from "react";
import { SiCodechef } from "react-icons/si";
import gsap from "gsap";

function Card({ data }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current.querySelectorAll(".text-animate"), {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
        },
        y: 40,
        opacity: 0,
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
        <div className="flex gap-5">
          <div className="space-y-4 text-xs text-cyan-400">
            <p className="text-animate">Role:</p>
            <p className="text-animate">Tech Stack:</p>
            <p className="text-animate">Date:</p>
          </div>
          <div className="space-y-4 text-xs">
            <p className="text-animate">{data?.role}</p>
            <p className="text-animate">{data?.techStack}</p>
            <p className="text-animate">{data?.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
