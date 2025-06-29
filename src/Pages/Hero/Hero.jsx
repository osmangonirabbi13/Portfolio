"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import rabbi from "../../assets/rabbi.png";
import TiltedCard from "./Titlecard/Titlecard";
import { Link } from "react-router";

const Hero = () => {
  const [imageSize, setImageSize] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setImageSize(500);
      } else if (width >= 768) {
        setImageSize(400);
      } else {
        setImageSize(300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="md:min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-150px)] flex items-center justify-center bg-gray-900 relative overflow-hidden sm:pt-0"
    >
      {/* Blurry Circles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <motion.div
            className="sm:absolute sm:top-1/4 sm:left-1/4 md:w-48 md:h-48 sm:w-72 sm:h-72 sm:bg-blue-600 sm:rounded-full sm:mix-blend-multiply sm:filter sm:blur-xl sm:opacity-20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-11/12 sm:w-10/12 lg:w-9/12 mx-auto py-10 sm:py-20 gap-8 sm:gap-16 z-10">
        {/* Left Text Section */}
        <div className="w-full space-y-4 sm:space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hi <span className="text-fuchsia-400">👋</span>, I'm Osman Goni
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            I am a passionate{" "}
            <span className="font-semibold text-cyan-500">
              MERN Stack Developer
            </span>{" "}
            who loves creating beautiful, efficient, <br /> and user-friendly
            websites.
          </p>

          <div className="flex gap-3 justify-center items-center md:justify-start pt-2 sm:pt-4">
            <Link
              to="/"
              className="rounded px-6 py-3 overflow-hidden cursor-pointer group bg-gradient-to-r from-blue-400 to-purple-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-cyan-400 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative text-center">Download CV</span>
            </Link>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className=" px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-cyan-400 rounded-md text-cyan-400"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-cyan-400/10 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-cyan-400 transition duration-300 group-hover:text-white ease ">
                Contact Me
              </span>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className={`w-[${imageSize}px] h-[${imageSize}px]`}
          style={{
            width: `${imageSize}px`,
            height: `${imageSize}px`,
          }}
        >
          <TiltedCard
            imageSrc={rabbi}
            altText="Osman Goni Rabbi"
            captionText="Osman Goni Rabbi"
            containerHeight={`${imageSize}px`}
            containerWidth={`${imageSize}px`}
            imageHeight={`${imageSize}px`}
            imageWidth={`${imageSize}px`}
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
