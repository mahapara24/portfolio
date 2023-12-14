import React, { useState } from "react";
import project1 from "..//../assets/portfolio/project1.png";
import project2 from "..//../assets/portfolio/project2.png";
import project3 from "..//../assets/portfolio/project3.png";
import project4 from "..//../assets/portfolio/project4.png";
import project5 from "..//../assets/portfolio/project5.png";
import project6 from "..//../assets/portfolio/project6.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      demoto:'https://mahapara24.github.io/Full-responsive-website-usagehub/',
      codeto:'https://github.com/mahapara24/Full-responsive-website-usagehub'
    },
    {
      id: 2,
      src: project2,
      demoto:'https://mahapara24.github.io/Bubble-game-js/',
      codeto:'https://github.com/mahapara24/Bubble-game-js'
    },
    {
      id: 3,
      src: project3,
      demoto:'https://mahapara24.github.io/Coffee-website-bootsrap/',
      codeto:'https://github.com/mahapara24/Coffee-website-bootsrap'
    },
    {
      id: 4,
      src: project4,
      demoto:'https://mahapara24.github.io/BMI-app/',
      codeto:'https://github.com/mahapara24/BMI-app'
    },
    {
      id: 5,
      src: project5,
      demoto:'https://mahapara24.github.io/portfolio-gallery-using-grid/',
      codeto:'https://github.com/mahapara24/portfolio-gallery-using-grid'
    },
    // {
    //   id: 6,
    //   src: project6,
    //   demoto:'https://mahapara24.github.io/gsap-simple-animation/',
    //   codeto:'https://github.com/mahapara24/gsap-simple-animation'
    // },
  ];

  return (
    <div className="bg-primary-gray overflow-scroll overflow-y-auto h-full w-full md:h-screen pt-28">
      <div className=" max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
      {/* i have used max-w-screen-md instead of lg */}
        <div className="pb-4 px-4">
          <h2 className="text-3xl  text-custom-red font-bold sm:text-3xl ">
            Projects
          </h2>
          <p className="py-2 text-2xl text-white ">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-2 sm:px:0">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="shawdow-md shadow-gray-600 rounded-lg">
              <img
                src={portfolio.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white ">
                <Link to={portfolio.demoto}rel="noreferrer" target={'_blank'} > Demo</Link> 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white">
                <Link to={portfolio.codeto}rel="noreferrer" target={'_blank'}>  Code </Link>
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
