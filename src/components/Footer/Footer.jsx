import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 p-4 pr-20 scrollbar-hide scroll-smooth bg-dark-gray w-full">
      <div className="flex flex-row items-center justify-center sm:flex-row sm:items-end sm:justify-end gap-5">
        <div>
          <Link
            to="https://www.linkedin.com/in/mahapara-nizamani-1ba88b292/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin color="#33D1FF" size={25} />
          </Link>
        </div>
        <div>
          <Link
            to="https://github.com/mahapara24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub color="#33D1FF" size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
