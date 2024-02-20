import React, { useState } from "react";
import project1 from "..//../assets/portfolio/project1.png";
import project2 from "..//../assets/portfolio/project2.png";
import project3 from "..//../assets/portfolio/project3.png";
import project4 from "..//../assets/portfolio/project4.png";
import project5 from "..//../assets/portfolio/project5.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      desc: "UI Clone Responsive",
      demoto: "https://mahapara24.github.io/Full-responsive-website-usagehub/",
      codeto: "https://github.com/mahapara24/Full-responsive-website-usagehub",
    },
    {
      id: 2,
      src: project2,
      desc: "Game Using JavaScript",
      demoto: "https://mahapara24.github.io/Bubble-game-js/",
      codeto: "https://github.com/mahapara24/Bubble-game-js",
    },
    {
      id: 3,
      src: project3,
      desc: "Password Generator React App",
      demoto: "https://password-generator-reactapp.vercel.app/",
      codeto: "https://github.com/mahapara24/password-generator-reactapp",
    },
    {
      id: 4,
      src: project4,
      desc: "BMI Calculator",
      demoto: "https://mahapara24.github.io/BMI-app/",
      codeto: "https://github.com/mahapara24/BMI-app",
    },
    // {
    //   id: 5,
    //   src: ,
    //   desc: "",
    //   demoto: "",
    //   codeto: "",
    // },
    // {
    //   id: 6,
    //   src: project6,
    //   demoto:'https://mahapara24.github.io/gsap-simple-animation/',
    //   codeto:'https://github.com/mahapara24/gsap-simple-animation'
    // },
  ];

  return (
    <div
      id="projects"
      className="bg-primary-gray  h- pt-20 scrollbar-hide scroll-smooth w-full md:h-screen  sm:pt-10"
    >
      <div className=" max-w-screen-lg p- mx-auto flex flex-col justify-center w-full h-full">
        {/* i have used max-w-screen-md instead of lg */}
        <div className="pb-4 pt-50  sm:pt-0 px-4">
          <h2 className="text-3xl font-bold text-center sm:text-left  text-custom-red  sm:text-3xl ">
            Projects
          </h2>
          <p className="py-2 pb-14 sm:pb-4 text-xl text-center sm:text-left font-normal  sm:text-2xl text-white ">
            Check out some of my work here
          </p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-10 px-4 p-2 sm:px:0">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="shawdow-md pt-2 shadow-gray-600 rounded-lg"
            >
              <p className="text-white pb-4 text-xl font-medium text-center">
                {portfolio.desc}
              </p>
              <img
                src={portfolio.src}
                alt=""
                className="rounded-md duration-200 hover:scale-125 pt-2"
              />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:bg-custom-red hover:text-black rounded-md hover:scale-105 text-white ">
                  <Link
                    to={portfolio.demoto}
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    {" "}
                    Demo
                  </Link>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200  hover:bg-custom-red hover:text-black rounded-md hover:scale-105 text-white">
                  <Link
                    to={portfolio.codeto}
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    {" "}
                    Code{" "}
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
