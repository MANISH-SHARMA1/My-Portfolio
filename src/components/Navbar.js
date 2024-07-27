import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      className="z-10 fixed w-screen top-0 shadow-md shadow-white"
      style={{ backgroundColor: "rgb(13, 48, 62)" }}
    >
      <div className="flex justify-around sm:justify-end sm:gap-10  text-white py-2 sm:mr-10">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/about")}>
          About
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/contact")}>
          Contact
        </div>
      </div>
    </div>
  );
}

export default Navbar;
