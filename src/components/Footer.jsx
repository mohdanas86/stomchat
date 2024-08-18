import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white  border-t">
      <div className="navContainer w-full md:w-[1200px] mx-auto px-4 py-4 md:px-0 md:py-3 flex justify-center items-center capitalize">
        {/* LOGO */}
        <p>all rights reserved by <span className="text-violet-600">Stom</span>Chat</p>
      </div>
    </footer>
  );
};

export default Footer;
