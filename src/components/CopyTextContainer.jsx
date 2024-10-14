import React, { useState } from "react";

// ICONS
import { FaRegCopy } from "react-icons/fa6";
import { useMyContext } from "../context/MyContext";

const CopyTextContainer = () => {
    const { dark, response, setResponse, prompt, setPrompt } = useMyContext();
  const [isCopied, setIsCopied] = useState(false);

  // COPY TEXT
  const copy = () => {
    navigator.clipboard
      .writeText(response)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  };
  return (
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
  );
};

export default CopyTextContainer;
