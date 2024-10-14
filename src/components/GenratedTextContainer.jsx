import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useMyContext } from "../context/MyContext";

const GenratedTextContainer = () => {
  const { dark, response, loading, setLoading } = useMyContext();
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
  );
};

export default GenratedTextContainer;
