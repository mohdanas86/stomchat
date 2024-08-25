import React from "react";
import { useMyContext } from "../context/MyContext";

const Header = () => {
  const { dark, setDark } = useMyContext();
  return (
    <>
      <div
        className={`header w-full shadow ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="navContainer flex justify-between items-center  w-full md:w-[1200px] mx-auto px-4 py-4 md:px-0 md:py-3">
          {/* LOGO */}
          <div className="logo">
            <h2 className="logoTitle font-semibold text-2xl">
              <a href="/">
                <span className="text-violet-600">Stom</span>Chat
              </a>
            </h2>
          </div>

          {/* DARK MODE BUTTON */}
          <div className="darkMode">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                className="sr-only peer"
                value=""
                type="checkbox"
                onClick={(e) => setDark((e) => !e, console.log(!e))}
              />
              <div className="w-12 h-7 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-5 before:w-5 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-5 after:h-5 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
