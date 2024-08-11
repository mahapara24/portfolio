import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="flex  flex-col z-50 fixed top-0 w-full bg-dark-gray/10">
      <div className="overflow-hidden flex justify-between items-center py-2 px-2 h-[60px] bg-dark-gray">
        <div>
          <h1 className="tracking-wider ml-2 text-lg font-medium sm:text-2xl text-custom-red sm:font-semibold">
            Mahapara Nizamani
          </h1>{" "}
        </div>

        <ul className="hidden sm:font-semibold tracking-wide md:flex  justify-center text-xl mr-4">
          <li>
            <Scroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className="block pl-3 duration-200 text-custom-red border-custom-red lg:hover:bg-transparent"
            >
              <NavLink
                to="home"
                className={({ isActive }) =>
                  `block pl-3 duration-200 ${
                    isActive ? "text-white" : "text-custom-red "
                  } border-custom-red lg:hover:bg-transparent`
                }
              >
                Home
              </NavLink>
            </Scroll>
          </li>

          <li>
            <Scroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className="block pl-3 duration-200 text-custom-red border-custom-red lg:hover:bg-transparent"
            >
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
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className="block pl-3 duration-200 text-custom-red border-custom-red lg:hover:bg-transparent"
            >
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
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass=""
              to="experience"
              spy={true}
              smooth={true}
              offset={2} // Adjust offset as needed
              duration={500}
              className="block pl-3 duration-200 text-custom-red border-custom-red lg:hover:bg-transparent"
            >
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  `block pl-3 cursor-pointer duration-200 ${
                    isActive ? "text-white" : "text-custom-red"
                  } border-custom-red lg:hover:bg-transparent`
                }
              >
                Experience
              </NavLink>
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
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
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
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
            </Scroll>
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
        className="pr-4  p-8 cursor-pointer sm:hidden text-custom-red"
        style={{ zIndex: 1000, position: "absolute", top: "0", right: "0" }}
      >
        {nav ? (
          <FaTimes className="" size={20} />
        ) : (
          <FaBars className="" size={20} />
        )}
      </div>

      {nav && (
        <ul className="sm:hidden text-center pt-6 z-10 flex flex-col bg-fixed h-screen scroll-smooth bg-dark-gray">
          <li className="flex justify-center py-6 font-semibold items-center text-center cursor-pointer z-50 capitalize text-2xl">
            <Scroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
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
            </Scroll>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 font-semibold text-2xl">
            <Scroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
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
            </Scroll>
          </li>
          <li className="cursor-pointer capitalize py-6 font-semibold text-2xl">
            <Scroll
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
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
            </Scroll>
          </li>
          <li className="cursor-pointer capitalize py-6 font-semibold text-2xl">
            <Scroll
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
              <NavLink
                to="/experience"
                onClick={() => setNav(!nav)}
                className={({ isActive }) =>
                  `block pl-3 cursor-pointer duration-200 ${
                    isActive ? "text-white" : "text-custom-red"
                  } border-custom-red `
                }
              >
                Experience
              </NavLink>
            </Scroll>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 font-semibold text-2xl">
            <Scroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className="block pl-3 duration-200 text-custom-red border-custom-red lg:hover:bg-transparent"
            >
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
            </Scroll>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 font-semibold text-2xl">
            <Scroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className={({ isActive }) =>
                `block pl-3 cursor-pointer duration-200 ${
                  isActive ? "text-white" : "text-custom-red"
                } border-custom-red lg:hover:bg-transparent`
              }
            >
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
            </Scroll>
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
