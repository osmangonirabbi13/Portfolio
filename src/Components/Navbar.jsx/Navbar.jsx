import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-50 bg-base-200 shadow px-4 md:px-20 lg:px-40">
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
            className="font-bold text-xl cursor-pointer"
            onClick={() => scroll.scrollToTop()}
          >
            Osman Goni
          </div>

          {/* My CV button for mobile & tablet */}
          <div className="ml-auto md:block lg:hidden">
            <a href="#cv">
              <button className="btn btn-primary btn-sm">My CV</button>
            </a>
          </div>
        </div>

        {/* === Desktop Layout === */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Left: Logo */}
          <div
            className="font-bold text-xl cursor-pointer flex-1"
            onClick={() => scroll.scrollToTop()}
          >
            Osman Goni
          </div>

          {/* Center: Menu Links */}
          <div className="flex gap-8 justify-center items-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600 border-b-2 border-indigo-600 font-semibold"
              className="cursor-pointer flex items-center gap-1"
            >
              <FaHome /> Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600 border-b-2 border-indigo-600 font-semibold"
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600 border-b-2 border-indigo-600 font-semibold"
              className="cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600 border-b-2 border-indigo-600 font-semibold"
              className="cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-indigo-600 border-b-2 border-indigo-600 font-semibold"
              className="cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Right: CV Button for Desktop */}
          <div className="flex-1 flex justify-end  lg:flex">
            <Link to="/">
              <button className="btn btn-primary">My CV</button>
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
