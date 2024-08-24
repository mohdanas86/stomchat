import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Axios from "axios";
import "../App.css";

// ICONS
import { FaLocationArrow } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // HANDEL SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (prompt === "" || prompt.trim() === "") {
        return;
      } else {
        const res = await Axios.get("http://localhost:3001/chat", {
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
    <div className="relative w-full md:w-[100%] mx-auto py-4 px-4 bg-black text-white">
      <div className="card bg-white border-0 w-full md:w-[80%] mx-auto">
        {/* GENRATED TEXT CONTAINER */}
        <div className="chat-header bg-white border-0">
          {response && (
            <div className="autotype">
              <span className="typing-text">
                <ReactMarkdown className="prose lg:prose-xl grid gap-4 bg-black text-white border-0">
                  {displayedText}
                </ReactMarkdown>
              </span>
            </div>
          )}

          {/* COPY CONTAINER */}
          {response ? (
            <>
              <div className="responseBar mb-[20%] md:mb-[10%] w-full py-4 px-4 border-t mt-8 relative">
                <span className="cursor-pointer" onClick={copy}>
                  <FaRegCopy />
                </span>

                {isCopied ? (
                  <div className="toast w-[80%] md:w-[20%] absolute left-0 md:top-12 top-2">
                    <div className="toast-content">copied</div>
                    <div className="toast-icon">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15.795 8.342l-5.909 9.545a1 1 0 0 1-1.628 0l-3.182-4.909a1 1 0 0 1 1.629-1.165l2.556 3.953L14.165 7.51a1 1 0 0 1 1.63 1.165z"></path>
                      </svg>
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        {/* FORM OF HANDELING PROMPT */}
        <form
          onClick={handleSubmit}
          className="chat-input border border-white rounded-3xl fixed bottom-4 left-[10%] w-[80%] bg-black"
        >
          <input
            type="text"
            id="prompt"
            className="message-input"
            placeholder="Type your message here"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="send-btn text-violet-500">
            <FaLocationArrow />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
