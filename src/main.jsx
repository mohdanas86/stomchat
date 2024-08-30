import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";

import HomePage from "./HomePage.jsx";
import Chat from "./components/chat.jsx";
import Header from "./components/Header.jsx";
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

import { useMyContext, MyProvider } from "./context/MyContext.jsx";

// Component to handle dark mode
const AppWrapper = () => {
  const { dark } = useMyContext(); // Fetch the dark mode state

  useEffect(() => {
    document.body.className = dark
      ? "bg-black text-white"
      : "bg-white text-black";
  }, [dark]); // Update class when dark mode changes

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/chat" element={<App />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>
      <AppWrapper />
    </MyProvider>
  </StrictMode>
);
