import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="flex flex-col fixed top-0 w-full bg-dark-gray">
      <div className="overflow-hidden flex justify-between items-center py-2 px-4 h-20 bg-dark-gray">
        <div>
          <h1 className="tracking-wider ml-2 text-2xl sm:text-3xl text-custom-red font-semibold">
            Mahapara Nizamani
          </h1>{" "}
        </div>

        <ul className="hidden sm:font-semibold tracking-wide md:flex  justify-center text-xl mr-4">
          <li>
            <NavLink
              to="home"
              className={({ isActive }) =>
                `block pl-3 duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
            }
          >
            Home
          </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              Contact
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              Github
            </NavLink>
          </li> */}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="pr-4  p-6 cursor-pointer sm:hidden text-custom-red"
        style={{ zIndex: 1000, position: "absolute", top: "0", right: "0" }}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="sm:hidden text-center pt-6 z-10 flex flex-col bg-fixed h-screen bg-dark-gray">
          <li className="flex justify-center py-6 font-semibold items-center text-center cursor-pointer z-50 capitalize text-2xl">
            <NavLink
              to="/home"
              onClick={() => setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red `
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 font-semibold text-2xl">
            <NavLink
              to="/about"
              onClick={() => setNav(!nav)}
              className={({ isActive }) => 
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red`
              }
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer capitalize py-6 font-semibold text-2xl">
            <NavLink
              to="/skills"
              onClick={() => setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red `
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 font-semibold text-2xl">
            <NavLink
              to="/projects"
              onClick={() => setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red `
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 font-semibold text-2xl">
            <NavLink
              to="/contact"
              onClick={() => setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red `
              }
            >
              Contact
            </NavLink>
          </li>
          {/* <li className="px-4 cursor-pointer capitalize py-6 font-semibold text-2xl">
            <NavLink
              to="/github"
              onClick={() => setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red `
              }
            >
              Github
            </NavLink>
          </li> */}
        </ul>
      )}
    </header>
  );
};

export default Header;
