import React from "react";
import { useMyContext } from "../context/MyContext";

// ICONS
import { FaArrowUp } from "react-icons/fa";

const PromptInputForm = () => {
    const { dark, response, setResponse, prompt, setPrompt, loading, setLoading } = useMyContext();
      // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    const url = "http://localhost:3001/chat";
    // const url = "https://form-4b0c.onrender.com/chat";
    e.preventDefault();
    setLoading(true)
    try {
      if (prompt === "" || prompt.trim() === "") {
        return;
      } else {
        console.log(prompt);

        const urlWithParams = new URL(url);
        urlWithParams.searchParams.append("prompt", prompt);

        const res = await fetch(urlWithParams.toString(), {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
        // console.log(data.data)
        setResponse(data.data || "No data received");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setResponse("Error fetching data");
    }finally{
     setLoading(false)
    }
  };
  return (
    <form
      onSubmit={handleSubmit} // Changed onClick to onSubmit
      className={`chat-input py-3 px-4 border rounded-3xl fixed bottom-4 md:left-[25%] md:w-[50%] left-[10%] w-[80%] ${
        dark
          ? "bg-black text-white border-white"
          : "bg-[#F8F8F8] text-black border-transparent"
      }`}
    >
      <input
        type="text"
        id="prompt"
        className={`message-input ${
          !dark ? "placeholder:text-slate-600" : "placeholder:text-white"
        }`}
        placeholder="Type your message here"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        type="submit" // Added type="submit"
        className={`send-btn p-1.5 rounded-full ${
          !dark ? "bg-gray-300" : "bg-white text-black"
        }`}
      >
        <FaArrowUp />
      </button>
    </form>
  );
};

export default PromptInputForm;
