import React from "react";
import { AiFillStar } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";

function Card() {
  return (
    <>
      <div
        style={{ backgroundColor: "rgb(14, 54, 70)" }}
        className="rounded p-5"
      >
        <div className="flex justify-between">
          <p>
            <SiCodechef />
          </p>
          <p className="text-cyan-400">Alice</p>
        </div>

        <div className="flex gap-2 my-5">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        <p>You're doing great work, keep going... </p>
      </div>
    </>
  );
}

export default Card;
