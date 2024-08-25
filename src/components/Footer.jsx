import React from "react";
import { useMyContext } from "../context/MyContext";

const Footer = () => {
  const {dark} = useMyContext();
  return (
    <footer className={`w-full border-t ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}>
      <div className="navContainer w-full md:w-[1200px] mx-auto px-4 py-4 md:px-0 md:py-3 flex justify-center items-center capitalize">
        {/* LOGO */}
        <p>all rights reserved by <span className="text-violet-600">Stom</span>Chat</p>
      </div>
    </footer>
  );
};

export default Footer;
