import React from "react";
import Navbar from "../../Components/Navbar.jsx/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
