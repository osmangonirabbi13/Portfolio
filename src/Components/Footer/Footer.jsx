import React from "react";
import code from "../../assets/code.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-gray-800 text-primary-content p-10">
        <aside>
          <div className="flex gap-3 items-center">
            <span>
              <img className="w-8 h-8" src={code} alt="" />
            </span>
            <p className="text-white text-2xl">Osman Goni</p>
          </div>

          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
