import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Axios from "axios";
import "../App.css";

// CONTEXT
import { useMyContext } from "../context/MyContext";

// ICONS
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";

const Chat = () => {
  const demoPromptObj = [
    { data: "Data science" },
    { data: "Big data" },
    { data: "Web development" }, // Fixed typo here
    { data: "Machine learning" },
  ];

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const { dark } = useMyContext(); // Removed setDark as it's not used

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (prompt === "" || prompt.trim() === "") {
        return;
      } else {
        const res = await Axios.get("https://form-4b0c.onrender.com/chat", {
          params: { prompt },
        });
        setResponse(res.data.data || "No data received");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setResponse("Error fetching data");
    }
  };

  // COPY TEXT
  const copy = () => {
    navigator.clipboard
      .writeText(response)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset copy status after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  };

  // AUTO WRITE ANIMATION
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(response.substring(0, index + 1));
      index += 1;
      if (index >= response.length) {
        clearInterval(intervalId);
      }
    }, 0.5);

    return () => clearInterval(intervalId);
  }, [response]);

  return (
    <div
      className={`relative w-full md:w-[100%] mx-auto py-4 px-4 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="card bg-white border-0 w-full md:w-[60%] mx-auto">
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

        {/* GENERATED TEXT CONTAINER */}
        <div className="chat-header bg-white border-0 ">
          {response ? (
            <>
              <div className="autotype">
                <span className="typing-text">
                  <ReactMarkdown
                    className={`prose lg:prose-xl grid gap-4 border-0 ${
                      dark ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {displayedText}
                  </ReactMarkdown>
                </span>
              </div>

              {/* COPY CONTAINER */}
              <div className="responseBar mb-[20%] md:mb-[10%] w-full py-4 px-4 border-t mt-8 relative">
                <span
                  className={`cursor-pointer ${
                    !dark ? "text-black bg-black" : "text-white bg-white"
                  }`}
                  onClick={copy}
                >
                  <FaRegCopy />
                </span>

                {isCopied && (
                  <div
                    className={`flex justify-center items-center p-1 rounded-lg w-20 ${
                      dark ? "text-black bg-white" : "text-white bg-black"
                    }`}
                  >
                    Copied
                  </div>
                )}
              </div>
            </>
          ) : (
            <div
              className={`flex justify-center items-center ${
                dark ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {/* DEMO PROMPT */}
              <div className="grid md:grid-cols-2 w-full md:w-[60%] grid-cols-1 px-10 gap-4 fixed bottom-[12%] md:bottom-[15%]">
                {demoPromptObj.map((v, i) => (
                  <div
                    key={i}
                    className={`w-full demoPrompt font-semibold border flex justify-start items-center py-3 px-4 rounded-lg shadow ${
                      dark
                        ? "bg-black text-white border-white"
                        : "bg-white text-black border-gray-300"
                    }`}
                    onClick={() => setPrompt(v.data)}
                  >
                    {v.data}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FORM OF HANDLING PROMPT */}
        <form
          onSubmit={handleSubmit} // Changed onClick to onSubmit
          className={`chat-input border rounded-3xl fixed bottom-4 md:left-[25%] md:w-[50%] left-[10%] w-[80%] ${
            dark
              ? "bg-black text-white border-white"
              : "bg-white text-black border-black"
          }`}
        >
          <input
            type="text"
            id="prompt"
            className="message-input"
            placeholder="Type your message here"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit" // Added type="submit"
            className={`send-btn p-1.5 rounded-full ${
              !dark ? "bg-black bg-gray-300" : "bg-white text-black"
            }`}
          >
            <FaArrowUp />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
