import React from "react";
import { useMyContext } from "../context/MyContext";

const DemoPromptContainer = () => {
  const { dark, prompt, setPrompt } = useMyContext();
  const demoPromptObj = [
    { data: "Data science" },
    { data: "Big data" },
    { data: "Web development" },
    { data: "Machine learning" },
  ];

  return (
    <div className="grid lg:grid-cols-2 w-full grid-cols-1 lg:px-10 gap-4">
      {demoPromptObj.map((v, i) => (
        <div
          key={i}
          className={`cursor-pointer w-full demoPrompt font-semibold border flex justify-start items-center p-4 md:rounded-lg rounded-xl shadow shadow-[#F8F8F8] ${
            dark
              ? "bg-black text-white border-white"
              : "bg-white text-gray-700 border-gray-300"
          }`}
          onClick={() => setPrompt(v.data)}
        >
          {v.data}
        </div>
      ))}
    </div>
  );
};

export default DemoPromptContainer;
