import React from "react";

import { HiArrowLongRight } from "react-icons/hi2";
import { useMyContext } from "../context/MyContext";

const Hero = () => {
  const { dark, setDark } = useMyContext();
  return (
    <>
      <div
        className={`header w-full shadow ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col gap-3 justify-center  md:text-start items-center w-full md:w-[1200px] mx-auto px-4 py-0 md:px-0 md:py-3">
          {/* TITLE */}
          <h2 className="title mt-8 text-4xl font-semibold mx-auto w-full text-center">
            Introducing <span className="text-violet-600">Stom</span>Chat
          </h2>
          <div className=" justify-center items-center flex font-semibold">
            <span>explore our model</span>
            <a href="/chat">
              <button className="px-4 py-2 border-transparent duration-300 hover:translate-x-2 text-2xl font-semibold">
                <HiArrowLongRight />
              </button>
            </a>
          </div>

          <div className="dec">
            <StomChatContent />
          </div>
        </div>
      </div>
    </>
  );
};

export const StomChatContent = () => {
  const { dark } = useMyContext();

  return (
    <div
      className={`max-w-4xl mx-auto p-6 rounded-lg ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <header className="mb-8">
        <p className={`mt-2 text-lg ${dark ? "text-white" : "text-black"}`}>
          An innovative chatbot designed to enhance your digital interactions
          with seamless and intelligent conversations. Built using the MERN
          stack and powered by the Gemini API, StomChat offers a unique and
          dynamic experience, making it a valuable tool for businesses and
          individuals alike.
        </p>
      </header>

      <section className="mb-8">
        <h2 className={`text-2xl font-semibold ${dark ? "text-white" : "text-black"}`}>
          What is StomChat?
        </h2>
        <p className={`mt-2 ${dark ? "text-gray-400" : "text-gray-700"}`}>
          StomChat is a cutting-edge chatbot application that leverages the
          latest technology to provide intuitive and responsive interactions.
          Whether you need help with customer support, want to automate routine
          tasks, or simply seek a friendly conversational partner, StomChat is
          here to assist you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className={`text-2xl font-semibold ${dark ? "text-white" : "text-black"}`}>
          Technology Stack
        </h2>
        <div className="mt-2 space-y-4">
          <div>
            <h3 className={`text-xl font-semibold ${dark ? "text-gray-300" : "text-gray-800"}`}>
              1. MERN Stack:
            </h3>
            <ul className={`list-disc list-inside mt-2 ${dark ? "text-gray-400" : "text-gray-700"}`}>
              <li>
                <strong>MongoDB:</strong> A NoSQL database that stores and
                manages the vast amount of conversational data with high
                performance and scalability.
              </li>
              <li>
                <strong>Express.js:</strong> A flexible and minimal web
                application framework that facilitates smooth communication
                between the server and the client.
              </li>
              <li>
                <strong>React.js:</strong> A powerful front-end library that
                provides a dynamic and interactive user interface for seamless
                user experiences.
              </li>
              <li>
                <strong>Node.js:</strong> The server-side runtime environment
                that ensures efficient processing and handling of chat requests.
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`text-xl font-semibold ${dark ? "text-gray-300" : "text-gray-800"}`}>
              2. Gemini API:
            </h3>
            <ul className={`list-disc list-inside mt-2 ${dark ? "text-gray-400" : "text-gray-700"}`}>
              <li>
                <strong>Advanced Natural Language Processing (NLP):</strong>{" "}
                Gemini API is integrated to enable sophisticated understanding
                and generation of human-like responses. This ensures that
                StomChat can handle complex queries and provide relevant answers
                with high accuracy.
              </li>
              <li>
                <strong>Contextual Understanding:</strong> The Gemini API helps
                StomChat understand the context of conversations, allowing it to
                maintain coherent and meaningful interactions over extended
                dialogues.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className={`text-2xl font-semibold ${dark ? "text-white" : "text-black"}`}>
          Features of StomChat
        </h2>
        <div className={`mt-2 space-y-4 ${dark ? "text-gray-400" : "text-gray-700"}`}>
          <ul className="list-disc list-inside">
            <li>
              <strong>Intelligent Responses:</strong> Thanks to the Gemini API,
              StomChat delivers responses that are not only accurate but also
              contextually relevant, making interactions feel natural and
              engaging.
            </li>
            <li>
              <strong>Real-Time Interaction:</strong> Built with the MERN stack,
              StomChat offers a smooth and responsive experience, with real-time
              updates and quick message processing.
            </li>
            <li>
              <strong>Customizable Integration:</strong> Easily integrate
              StomChat into various platforms, from websites to mobile apps,
              providing a versatile solution for diverse needs.
            </li>
            <li>
              <strong>Data Management:</strong> With MongoDB, StomChat
              efficiently manages and analyzes conversational data, enabling
              continuous improvement and personalization of interactions.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className={`text-2xl font-semibold ${dark ? "text-white" : "text-black"}`}>
          Use Cases
        </h2>
        <div className={`mt-2 space-y-4 ${dark ? "text-gray-400" : "text-gray-700"}`}>
          <ul className="list-disc list-inside">
            <li>
              <strong>Customer Support:</strong> Automate and streamline
              customer service processes, providing quick and reliable
              assistance to users.
            </li>
            <li>
              <strong>Personal Assistant:</strong> Assist with daily tasks, set
              reminders, and manage schedules, making your digital life more
              organized.
            </li>
            <li>
              <strong>Educational Tool:</strong> Offer interactive learning
              experiences and support for educational content, making learning
              more engaging.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className={`text-2xl font-semibold ${dark ? "text-white" : "text-black"}`}>
          Why Choose StomChat?
        </h2>
        <p className={`mt-2 ${dark ? "text-gray-400" : "text-gray-700"}`}>
          StomChat stands out for its combination of advanced technologies and
          user-centric design. By harnessing the power of the MERN stack and
          Gemini API, it delivers a chatbot experience that is both efficient
          and intelligent. Whether you’re looking to enhance customer
          interactions or provide personalized support, StomChat is designed to
          meet and exceed your expectations.
        </p>
        <p className={`mt-2 ${dark ? "text-gray-400" : "text-gray-700"}`}>
          Embrace the future of digital conversations with StomChat – where
          technology meets intelligence, and interactions become more
          meaningful.
        </p>
      </section>
    </div>
  );
};


export default Hero;
