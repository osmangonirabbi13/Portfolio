import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import code from "../../assets/code.png";
const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-50  shadow-md px-4 bg-gray-900 md:px-20 lg:px-40">
      {/* === Top Navbar === */}
      <div className="navbar px-0 flex items-center justify-between">
        {/* === Mobile/Tablet Layout === */}
        <div className="flex items-center gap-4 w-full lg:hidden">
          {/* Menu Button */}
          <label htmlFor="my-drawer" className="cursor-pointer p-2">
            <GiHamburgerMenu className="text-2xl text-gray-700" />
          </label>

          {/* Logo */}
          <div
            className="font-bold text-xl cursor-pointer flex gap-2 items-center"
            onClick={() => scroll.scrollToTop()}
          >
            <span>
              <img className="w-6 h-6" src={code} alt="" />
            </span>
            <p className="text-white">Osman Goni</p>
          </div>

          {/* My CV button for mobile & tablet */}
          <div className="ml-auto md:block lg:hidden">
            <Link to="/">
              <button className="btn btn-primary btn-sm">
                Download Resume
              </button>
            </Link>
          </div>
        </div>

        {/* === Desktop Layout === */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Left: Logo */}
          <div
            className="font-bold text-xl cursor-pointer flex items-center gap-3 flex-1 "
            onClick={() => scroll.scrollToTop()}
          >
            <span>
              <img className="w-6 h-6 " src={code} alt="" />
            </span>
            <p className="text-white text-xl">Osman Goni</p>
          </div>

          {/* Center: Menu Links */}
          <div className="flex gap-8 justify-center items-center text-xl">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600  font-semibold"
              className="cursor-pointer flex items-center gap-1 text-white"
            >
              <FaHome /> Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600  font-semibold"
              className="cursor-pointer text-white"
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600  font-semibold"
              className="cursor-pointer text-white"
            >
              Skills
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600  font-semibold"
              className="cursor-pointer text-white"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600  font-semibold"
              className="cursor-pointer text-white"
            >
              Contact
            </Link>
          </div>

          {/* Right: CV Button for Desktop */}
          <div className="flex-1 flex justify-end  lg:flex">
            <Link
              to="/"
              className="rounded px-6 py-3 overflow-hidden cursor-pointer group bg-gradient-to-r from-blue-400 to-purple-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-cyan-400 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative text-center">Download Resume</span>
            </Link>
          </div>
        </div>
      </div>

      {/* === Mobile Drawer === */}
      <div className="drawer lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content" />
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 w-64 min-h-full p-4 space-y-2 text-base">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-indigo-600 font-semibold"
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-indigo-600 font-semibold"
                className="cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-indigo-600 font-semibold"
                className="cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-indigo-600 font-semibold"
                className="cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-indigo-600 font-semibold"
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
