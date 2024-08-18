import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Axios from "axios";
import "../App.css";
import { TiArrowUpThick } from "react-icons/ti";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.get("http://localhost:3000/chat", {
        params: { prompt },
      });
      setResponse(res.data.data || "No data received");
    } catch (err) {
      console.error("Error fetching data:", err);
      setResponse("Error fetching data");
    }
  };

  return (
    <div className="relative w-full md:w-[1200px] mx-auto py-4 px-4">
      {/* SEARCH CONTAINER */}
      <form
        className="flex fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden z-50"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="prompt"
          className="border rounded-l-lg border-slate-300 py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
         {/* From Uiverse.io by adamgiebl  */}
        <button>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </form>

      {/* RESPONSE CONTAINER */}
      <div className="flex justify-center items-start w-full h-[calc(100vh-80px)] border">
        <div className="md:w-[1200px] w-full px-4 md:px-4 bg-white rounded-lg overflow-y-auto chatScroll h-[90%]">
          <ReactMarkdown className="prose lg:prose-xl grid gap-4">
            {response}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Chat;
