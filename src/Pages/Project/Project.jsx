import React from "react";
import { Link } from "react-router";

import bcard1 from "../../assets/ImageCard1/bcard1.png";
import bcard2 from "../../assets/ImageCard1/bcard2.png";
import bcard3 from "../../assets/ImageCard1/bcard3.png";

const Project = () => {
  return (
    <div className="bg-gray-800">
      <div className=" max-w-6xl mx-auto px-4 py-10 " id="project">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent  mb-6">
          Projects
        </h1>
        <div className="h-[2px] w-[170px] bg-sky-500 mx-auto mb-6 mt-4 "></div>
        {/* Project Card 1 */}
        <div className="border bg-gray-900  rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2  md:h-auto rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-full object-cover opacity-90"
                src={bcard1}
                alt="Slide 1"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-gray-200">
              Food Donation
            </h2>
            <p className="text-gray-300 mb-2">
              Community Food Sharing is a compassionate platform designed to
              foster the sharing of surplus food among individuals, promoting
              community collaboration and addressing food scarcity.
            </p>
            <ul className="mb-4 list-disc list-inside text-sm text-gray-300">
              <li>
                Request Food System On every food detail page, users can click
                “Request Food”, which: - Opens a modal with confirmation and
                additional details. - Adds the request to the user's virtual
                request list.
              </li>
              <li>
                Manage Donated Foods (for Donors) Donors have access to a Manage
                Foods page where they can: - Add new food donations. - Delete
                any outdated or incorrect food items. - Edit food details like
                quantity or expiry date.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 border border-gray-400 text-sm bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent rounded-full">
                React
              </span>
              <span className="px-3 py-1 border border-gray-400 text-sm bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent rounded-full">
                JWT
              </span>
              <span className="px-3 py-1 border border-gray-400 text-sm rounded-full bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                Express.js
              </span>
              <span className="px-3 py-1 border border-gray-400 text-sm rounded-full bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                MongoDB
              </span>
              <span className="px-3 py-1 border border-gray-400 text-sm rounded-full bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                Tailwind
              </span>
            </div>
            <div className="flex gap-4">
              <Link
                target="_blank"
                to="https://foodshare01.web.app/"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative ">Live Site </span>
              </Link>
              <Link
                target="_blank"
                to="https://github.com/osmangonirabbi13/Community-Food-Share"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">GitHub Client </span>
              </Link>
              <Link
                target="_blank"
                to="https://github.com/osmangonirabbi13/Community-food-sharing-server"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">GitHub Server </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="border bg-gray-900  rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2  md:h-auto rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-full object-cover opacity-90"
                src={bcard2}
                alt="Slide 1"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-gray-200">
              Freelance Task Marketplace
            </h2>
            <p className="text-gray-300 mb-2">
              It is a Full Stack project. it's simple and modern platform where
              users can post freelance tasks, and freelancers can bid on those
              tasks based on skills, budget, and deadlines.
            </p>
            <ul className="mb-4 list-disc list-inside text-sm text-gray-300">
              <li>
                {" "}
                Complete Task Management – Add, update, delete, and view tasks.
                Users can manage their own tasks and place bids on others.
              </li>
              <li>
                User Authentication – Sign up and log in securely using Firebase
                Authentication.
              </li>
              <li>
                {" "}
                Responsive Design – Fully responsive layout for mobile, tablet,
                and desktop devices.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 border border-gray-400 text-sm bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent rounded-full">
                React
              </span>
              <span className="px-3 py-1 border border-gray-400 text-sm rounded-full bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                ExpressJs
              </span>
              <span className="px-3 py-1 border border-gray-400 text-sm rounded-full bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                MongoDB
              </span>
              <span className="px-3 py-1 border border-gray-400 text-sm rounded-full bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                Firebase
              </span>
              <span className="px-3 py-1 border border-gray-400 text-sm rounded-full bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                Tailwind
              </span>
            </div>
            <div className="flex gap-4">
              <Link
                target="_blank"
                to="https://freelance-task-marketplace1.web.app/"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative ">Live Site </span>
              </Link>
              <Link
                target="_blank"
                to="https://github.com/osmangonirabbi13/freelance-task-marketplace-client-side"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">GitHub Client </span>
              </Link>
              <Link
                target="_blank"
                to="https://github.com/osmangonirabbi13/freelance-task-marketplace-server-side"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">GitHub Server </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="border bg-gray-900  rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2  md:h-auto rounded-lg overflow-hidden">
            <div>
              <img
                className="w-full h-full object-cover opacity-90"
                src={bcard3}
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2 text-gray-200">Pay Bills</h2>
            <p className="text-gray-300 mb-2">
              PayBills is a modern, responsive and secure utility bill
              management platform. It allows users to pay various bills
              including electricity, gas, water, tuition, and more — all from
              one place.
            </p>
            <ul className="mb-4 list-disc list-inside text-sm text-gray-300">
              <li>
                {" "}
                Manage Multiple Bills – Add, view, and manage multiple bill
                types in one place.
              </li>
              <li>
                {" "}
                User Authentication – Sign up and log in securely using Firebase
                Authentication.
              </li>
              <li>
                Bill History – View your past payments and track bill history.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 border border-gray-400 text-sm bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent rounded-full">
                React
              </span>
              <span className="px-3 py-1 border border-gray-400 text-sm rounded-full bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                Firebase
              </span>

              <span className="px-3 py-1 border border-gray-400 text-sm rounded-full bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent">
                Tailwind
              </span>
            </div>
            <div className="flex gap-4">
              <Link
                target="_blank"
                to="https://bill-payment01.web.app/"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative ">Live Site </span>
              </Link>
              <Link
                to="https://github.com/osmangonirabbi13/paybill-management-react-authentication"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative"> GitHub Link </span>
              </Link>
              {/* <Link
                to="/"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">GitHub Server </span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
