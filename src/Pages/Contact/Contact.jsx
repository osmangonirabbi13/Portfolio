import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-16 px-4">
      <h2 className="text-3xl text-center mb-6 bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent font-bold">
        Contact
      </h2>
      <div className="h-[2px] w-[170px] bg-sky-500 mx-auto mb-6  "></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 border p-6 rounded-lg">
        <div className="border rounded-lg p-6 bg-cyan-400/10">
          <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-500 to-indigo-400 bg-clip-text text-transparent ">
            Contact Information
          </h3>
          <div className="h-40  rounded-lg bg-cyan-400/10 p-5">
            <ul className="text-gray-200  font-medium">
              <li className="mb-4">
                <p>
                  <b>Address :</b> Gobindapur Hazir Bazar, Feni, Bangladesh
                </p>
              </li>
              <li className="mb-4">
                <p>
                  <b>Phone :</b> +88 01725 13 30 45
                </p>
              </li>
              <li className="mb-4">
                <p>
                  <b>Email :</b> osmanrabbi89@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-cyan-400/10">
          <input
            type="text"
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-2 border text-white border-amber-50 rounded-md"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full mb-4 px-4 py-2 border text-white border-amber-50 rounded-md"
          ></textarea>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md cursor-pointer">
            Send Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
