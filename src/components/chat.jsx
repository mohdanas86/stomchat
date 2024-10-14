import React, { useState, useEffect } from "react";
import "../App.css";

import logo from "../assets/logo.jpg";

// CONTEXT
import { useMyContext } from "../context/MyContext";

// ICONS
import DemoPromptContainer from "./DemoPromptContainer";
import GenratedTextContainer from "./GenratedTextContainer";
import CopyTextContainer from "./CopyTextContainer";
import PromptInputForm from "./PromptInputForm";
import BrandLogo from "./BrandLogo";

const Chat = () => {
  const {
    dark,
    response,
    setResponse,
    prompt,
    setPrompt,
    isLoggedIn,
    loading,
    setLoading,
  } = useMyContext();

  return (
    <div
      className={`relative w-full md:w-[100%] mx-auto py-4 px-4 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="card bg-white w-full md:w-[60%] mx-auto">
        {/* USER PROMPT */}
        {response ? (
          <div className={`userPrompt w-full flex justify-end items-center`}>
            <p
              className={`py-3 px-6 rounded-xl ${
                !dark ? "bg-gray-100" : "bg-[#242424] text-white"
              }`}
            >
              {prompt}
            </p>
          </div>
        ) : (
          ""
        )}

        {loading ? (
          <div className="flex justify-start items-center gap-4 mt-[8%] lg:mt-[0%] border border-red-600">
            <div className="lg:w-[50px] w-[40px]">
              <img src={logo} alt="logo" />
            </div>
            <span className="loading loading-dots loading-md"></span>
          </div>
        ) : (
          <div className="chat-header bg-white">
            {response ? (
              <>
                {/* GENERATED TEXT CONTAINER */}
                <GenratedTextContainer />

                {/* COPY CONTAINER */}
                <CopyTextContainer />
              </>
            ) : (
              <div
                className={`flex flex-col justify-center items-center w-full h-[60vh] mt-[20vh] gap-[12%]`}
              >
                {/* LOGO */}
                <div className="log w-[40%] lg:w-[15%]">
                  <BrandLogo />
                </div>

                {/* DEMO PROMPT */}
                <div className="w-full">
                  <DemoPromptContainer />
                </div>
              </div>
            )}
          </div>
        )}

        {/* FORM OF HANDLING PROMPT */}
        <div className="w-full">
          <PromptInputForm />
        </div>
      </div>
    </div>
  );
};

export default Chat;
