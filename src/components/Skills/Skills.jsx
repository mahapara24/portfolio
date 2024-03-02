import React from "react";
import html from "..//../assets/html.png";
import css from "..//../assets/css.png";
import tailwind from "..//../assets/tailwind.svg";
import js from "..//../assets/js.png";
import react from "..//../assets/reactjs.png";
import node from "..//../assets/node.png";
import github from "..//../assets/github.png";

import git from "..//../assets/git.png";
import python from "../../assets/python.png";
import Nextjs from "..//../assets/nextjs.svg";
import mongoDb from "..//../assets/mongo.png";
import ts from "..//../assets/ts.svg";
import expressjs from "..//..//assets/expressjs.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-100",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shawdow-blue-100",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-100",
    },
    {
      id: 4,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-100",
    },

    {
      id: 5,
      src: python,
      title: "Python",
      style: "shadow-white-100",
    },
    {
      id: 6,
      src: react,
      title: "ReactJS",
      style: "shawdow-blue-100",
    },
    {
      id: 7,
      src: ts,
      title: "TypeScript",
      style: "shawdow-green-100",
    },
    {
      id: 7,
      src: node,
      title: "NodeJS",
      style: "shawdow-green-100",
    },
    {
      id: 8,
      src: expressjs,
      title: "ExpressJs",
      style: "shawdow-white-100",
    },

    {
      id: 9,
      src: mongoDb,
      title: "MongoDB",
      style: "shadow-white-100",
    },
    {
      id: 10,
      src: Nextjs,
      title: "NextJS",
      style: "shadow-white-100 bg-white",
    },
    {
      id: 11,
      src: git,
      title: "Git",
      style: "shawdow-white-100",
    },
  ];

  return (
    <div
      id="skills"
      className="h-full max-h-screen  py-10 pb-50 scrollbar-hide scroll-smooth bg-primary-gray  text-white  sm:pt-20 sm:h-screen"
    >
      <div className="max-w-screen-lg mx-auto  py-8">
        <div>
          <h2 className="text-2xl font-bold text-center sm:text-left sm:text-4xl sm:font-bold text-custom-red ">
            Skills
          </h2>
          <p className=" py-2 pb-10 text-[17px] font-normal text-center sm:text-left  sm:text-2xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-3  items-center justify-center sm:grid-cols-4 place-content-center md:grid-cols-4 gap-4">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`bg-dark-gray items-center justify-center rounded-lg shadow-md hover:scale-105 duration-500 py-2`}
            >
              <img className="sm:h-16 sm:p-1 h-12  mx-auto" src={src} alt="" />
              <p className="text-xl mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
