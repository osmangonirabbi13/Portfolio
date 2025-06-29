import React from "react";
import css from "./icons/css-3.png";
import firebase from "./icons/firebase.jpeg";
import github from "./icons/github.png";
import html from "./icons/html.png";
import js from "./icons/js.png";
import jwt from "./icons/JSON.jpeg";
import MongoDB from "./icons/MongoDB.jpeg";
import nextJs from "./icons/Next_js.jpeg";
import nodejs from "./icons/nodejs.png";
import reactjs from "./icons/physics.png";
import expressjs from "./icons/physics.png";
import tailwindcss from "./icons/TailwindCSS.jpeg";
const Skill = () => {
  const skills = [
    { name: "Html", image: html },
    { name: "css", image: css },
    { name: "tailwind", image: tailwindcss },
    { name: "javascript", image: js },
    { name: "react js", image: reactjs },
    { name: "node JS", image: nodejs },
    { name: "express js", image: expressjs },
    { name: "mongodb", image: MongoDB },
    { name: "next js", image: nextJs },
    { name: "github", image: github },
    { name: "firebase", image: firebase },
    { name: "JSON WEB Token", image: jwt },
  ];
  return (
    <div
      id="skills"
      className="min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-500px)] lg:min-h-[calc(100vh-300px)] bg-gray-900  overflow-hidden pt-10"
    >
      <h1 className="text-4xl sm:text-5xl text-center bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent pb-3 font-bold">
        Skills & Technologies
      </h1>
      <div className="h-[2px] w-[250px] bg-sky-500 mx-auto mb-6 mt-3"></div>

      <div className="relative z-10 flex flex-wrap justify-center gap-6 px-4 py-10 lg:max-w-8xl lg:mx-auto lg:px-50">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="w-28 sm:w-36 p-4 bg-cyan-400/10 bg-opacity-5 backdrop-blur rounded shadow-md flex flex-col items-center"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-14 sm:w-20 mb-2"
            />
            <p className="text-center text-gray-200 text-sm sm:text-base font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
