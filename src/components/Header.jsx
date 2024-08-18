import React from "react";

const Header = () => {
  return (
    <>
      <div className="header w-full shadow bg-black text-white">
        <div className="navContainer w-full md:w-[1200px] mx-auto px-4 py-4 md:px-0 md:py-3">
          {/* LOGO */}
          <div className="logo">
            <h2 className="logoTitle font-semibold text-2xl">
              <a href="/">
                <span className="text-violet-600">Stom</span>Chat
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
