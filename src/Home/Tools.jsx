import React from "react";
import HeadingSection from "../components/HeadingSection";

// this is a list of tools with image, name, title and subtitle
const tools = [
  {
    id: 1,
    img: "grammer.png",
    name: "Grammarly",
    title: "✍️ Grammarly",
    subtitle:
      "Spelling, grammar, and clarity suggestions for confident writing.",
  },
  {
    id: 2,
    img: "eslaspeak.png",
    name: "ELSA Speak",
    title: "🗣️ ELSA Speak",
    subtitle: " AI-powered speaking coach to improve accent and fluency.",
  },
  {
    id: 3,
    img: "youglish.jpeg",
    name: "YouGlish",
    title: "🔊 YouGlish",
    subtitle:
      " Watch real-life video examples of how native speakers use words.",
  },
  {
    id: 4,
    img: "chatgpt.jpeg",
    name: "ChatGpt",
    title: "🤖 ChatGPT",
    subtitle:
      "Improve speaking, writing, and thinking in English through real conversations.",
  },
];

const Tools = () => {
  return (
    // main container with background and padding
    <div className="flex flex-col justify-center items-center px-4 md:px-12 lg:px-22 py-12 bg-[#0F172A]">
     <HeadingSection title=' Empowering Your English Journey with Proven Tools' heading=' At AccentPilot, we integrate world-class tools into our training—so you
        can practice smarter, 
        speak clearer, and grow faster with confidence.'/>

      {/* grid layout to show all tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-8 text-center text-black">
        {tools.map((tool) => (
          // each tool box
          <ul
            key={tool.id}
            className="bg-gray-100 hover:shadow hover:scale-105 duration-300 hover:shadow-blue-400 transition"
          >
            {/* tool image */}
            <img
              src={tool.img}
              alt={tool.name}
              className="w-10 h-10 rounded-full ring-1 ring-slate-400 mx-auto mt-4"
            />
            {/* tool title */}
            <h3 className="text-xl font-semibold text-gray-800 ">
              {tool.title}
            </h3>
            {/* tool subtitle */}
            <p className="text-gray-600 p-5">{tool.subtitle}</p>
          </ul>
        ))}
      </div>

      {/* explore more button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 mt-6 py-3 rounded font-medium flex items-center justify-center">
        Explore More
      </button>
    </div>
  );
};

export default Tools;
