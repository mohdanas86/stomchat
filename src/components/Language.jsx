import React from "react";
import { useMyContext } from "../context/MyContext";

const Language = () => {
  const { language, setLanguage } = useMyContext();
  return (
    <div>
      <ul className="flex gap-2">
        <li
          className="border p-2 cursor-pointer"
          onClick={(e) => setLanguage("in hindi")}
        >
          Hindi
        </li>
        <li
          className="border p-2 cursor-pointer"
          onClick={(e) => setLanguage("in urdu")}
        >
          Urdu
        </li>
      </ul>
    </div>
  );
};

export default Language;
