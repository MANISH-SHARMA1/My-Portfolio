import React from "react";
import { SiCodechef } from "react-icons/si";

function Card({ data }) {
  return (
    <>
      <div
        style={{ backgroundColor: "rgb(14, 54, 70)" }}
        className="rounded p-5 space-y-4"
      >
        <div className="flex justify-between items-center">
          <SiCodechef className="text-2xl" />
          <p className="text-cyan-400">
            {data?.name} <span className="text-white">Website</span>
          </p>
        </div>
        <div className="flex gap-5">
          <div className="space-y-4 text-xs text-cyan-400">
            <p>Role:</p>
            <p>Tech Stack:</p>
            <p>Date:</p>
          </div>
          <div className="space-y-4 text-xs">
            <p>{data?.role}</p>
            <p>{data?.techStack}</p>
            <p>{data?.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
