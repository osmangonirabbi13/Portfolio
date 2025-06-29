import React from "react";
import rabbiImg from "../../assets/rabbiImg.png";
import { Link } from "react-router";
const About = () => {
  return (
    <div
      id="about"
      className="min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-500px)] lg:min-h-[calc(100vh-300px)]  bg-gray-800 "
    >
      <h1 className="text-5xl text-center pt-8 bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent font-bold">
        About Me{" "}
      </h1>
      <div className="h-[2px] w-[170px] bg-sky-500 mx-auto mb-6 mt-3 "></div>
      <section className=" flex items-center justify-center px-6 text-white font-sans md:pt-10">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="mt-6  text-gray-300 text-lg md:text-xl lg:text-2xl">
              Hi there!👋 I'm a passionate{" "}
              <span className="font-semibold text-cyan-500">
                MERN Stack Developer{" "}
              </span>
              specializing in crafting robust web applications. With a keen
              focus on user-centric design and seamless functionality, I thrive
              on leveraging MongoDB for flexible data management, harnessing
              Express.js for efficient server-side development, and creating
              dynamic user interfaces with React. Powered by Node.js, I bring
              projects to life with scalable and performant backend solutions.
              Let's build something amazing together!
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-4 border-l-4 border-red-500" />

            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-4 border-r-4 border-red-500" />

            <img
              src={rabbiImg}
              alt=""
              className="w-64 h-auto mb-10  object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
