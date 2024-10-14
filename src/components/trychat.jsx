import React, { useEffect } from "react";
import axios from "axios";
import { useMyContext } from "../context/MyContext";
import Cookies from "js-cookie";
import Language from "./Language";

const Header = () => {
  const {
    login,
    setLogin,
    isLoggedIn,
    logoutUser,
    dark,
    setDark,
    language,
    setLanguage,
  } = useMyContext();

  useEffect(() => {
    console.log("Selected Language:", language); // Log selected language

    if (language) {
      Cookies.set("lang", language, { path: "/" });
      localStorage.setItem("lang", language);
    } else {
      Cookies.remove("lang"); // Clear cookie if no language selected
      localStorage.removeItem("lang"); // Clear localStorage
    }
  }, [language]);

  return (
    <>
      <div
        className={`header w-full shadow ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="navContainer flex justify-between items-center  w-full md:w-[1200px] mx-auto px-4 py-4 md:px-0 md:py-3">
          <div className="logo">
            <h2 className="logoTitle font-semibold text-2xl">
              <a href="/">
                <span className="text-violet-600">Stom</span>Chat
              </a>
            </h2>
          </div>

          <div className="flex justify-center items-center gap-6">
            {isLoggedIn ? (
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
            ) : (
              ""
            )}

            {!isLoggedIn ? (
              <a
                onClick={(e) => setLogin((e) => !e)}
                className={`cursor-pointer focus:ring-4 font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-1.5 focus:outline-none border hover:border-transparent ${
                  !dark
                    ? "text-gray-800 dark:text-white hover:bg-violet-500 hover:text-white focus:ring-gray-300 border-black dark:focus:ring-gray-800 dark:hover:bg-gray-700"
                    : "text-white hover:bg-gray-200 hover:text-gray-800 focus:ring-gray-500 border-gray-300"
                }`}
              >
                {!login ? "Login" : "Register"}
              </a>
            ) : (
              <a
                onClick={logoutUser}
                className={`cursor-pointer focus:ring-4 font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-1.5 focus:outline-none border hover:border-transparent ${
                  !dark
                    ? "text-gray-800 dark:text-white hover:bg-violet-500 hover:text-white focus:ring-gray-300 border-black dark:focus:ring-gray-800 dark:hover:bg-gray-700"
                    : "text-white hover:bg-gray-200 hover:text-gray-800 focus:ring-gray-500 border-gray-300"
                }`}
              >
                logout
              </a>
            )}
          </div>

          <Language />
        </div>
      </div>
    </>
  );
};

export default Header;
