import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Hearder = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="fixed overflow-hidden top-0 flex justify-between items-center py-12 px-2 w-full h-20 bg-dark-gray">
      <div>
        <h1 className="tracking-wider ml-9 text-2xl sm:text-3xl text-custom-red font-semibold">
          Mahapara Nizamani
        </h1>{" "}
      </div>

      {/* <div className='flex items-start place-content-end content-end  justify-end mx-18 px-40 text-2xl'> */}
      <ul className="sm:font-semibold tracking-wider hidden md:flex flex justify-center  text-xl mr-20">
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
              `block pl-3 cursor-pointer du ration-200 ${
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

        <li>
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
        </li>
      </ul>
      {/* </div> */}
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 cursor-pointer z-10 text-custom-red md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex bg-fixed z-1 h-100 flex-col sm:hidden justify-center items-center absolute top-0 left-0 w-full h-screen py-11 bg-dark-gray">
          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <NavLink 
              to="/home"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <NavLink
              to="/about"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              About
            </NavLink>
          </li>

          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <NavLink
              to="/skills"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer du ration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              Skills
            </NavLink>
          </li>

          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <NavLink
              to="/projects"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              Projects
            </NavLink>
          </li>

          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <NavLink
              to="/contact"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              Contact
            </NavLink>
          </li>

          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <NavLink
              to="/github"
              onClick={()=> setNav(!nav)}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              Github
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Hearder;
