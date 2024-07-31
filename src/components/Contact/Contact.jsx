import React from "react";
import { Link } from "react-router-dom";

import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-full overflow-scroll overflow-y-scroll  pt-50  sm:pt-2 bg-primary-gray sm:overflow-hidden  "
    >
      <div className="flex flex-col  justify-center max-w-screen-lg pt-10 mx-auto h-full">
        contact
        <div className="ml-2 p-4">
          <h2 className="text-2xl font-bold text-center  sm:text-4xl sm:font-bold  text-custom-red  ">
            Contact
          </h2>
          <p className="text-[17px] pt-10 text-center  font-normal  sm:text-2xl  text-white">
            Get in Touch
          </p>
        </div>
        <div className="flex pt-2 justify-center items-center">
          <a
            href="mailto:mahapara2424@gmail.com"
            className="text-black rounded-md px-4 py-2 text-lg bg-custom-red hover:bg-custom-red-dark transition-all duration-300"
          >
            mahapara2424@gmail.com{" "}
          </a>
        </div>
        <div className="flex flex-row items-center  justify-center pt-6 gap-6">
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
    </div>
  );
};

export default Contact;
