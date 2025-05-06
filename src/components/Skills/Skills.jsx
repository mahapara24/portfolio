import React from "react";
import { motion } from "framer-motion";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.svg";
import js from "../../assets/js.png";
import react from "../../assets/reactjs.png";
import node from "../../assets/node.png";
import git from "../../assets/git.png";
import python from "../../assets/python.png";
import Nextjs from "../../assets/nextjs.svg";
import mongoDb from "../../assets/mongo.png";
import ts from "../../assets/ts.svg";
import expressjs from "../../assets/expressjs.png";

const Skills = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: tailwind, title: "Tailwind", style: "shadow-cyan-500" },
    { id: 4, src: js, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 5, src: python, title: "Python", style: "shadow-green-500" },
    { id: 6, src: react, title: "ReactJS", style: "shadow-blue-500" },
    { id: 7, src: ts, title: "TypeScript", style: "shadow-blue-500" },
    { id: 8, src: node, title: "NodeJS", style: "shadow-green-500" },
    { id: 9, src: expressjs, title: "ExpressJs", style: "shadow-gray-500" },
    { id: 10, src: mongoDb, title: "MongoDB", style: "shadow-green-500" },
    { id: 11, src: Nextjs, title: "NextJS", style: "shadow-white" },
    { id: 12, src: git, title: "Git", style: "shadow-orange-500" },
  ];

  return (
    <div id="skills" className="min-h-screen py-20 px-4 bg-primary-gray relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-gray via-dark-gray to-secondary-gray opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-red/5 via-transparent to-transparent animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-custom-red mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-custom-red mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {techs.map(({ id, src, title, style }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-dark-gray/50 backdrop-blur-sm p-6 rounded-xl border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300 h-full flex flex-col items-center justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <img 
                    className="h-12 w-12 object-contain filter group-hover:brightness-110 transition-all duration-300" 
                    src={src} 
                    alt={title} 
                  />
                </motion.div>
                <h3 className="text-lg font-semibold text-white group-hover:text-custom-red transition-colors duration-300">
                  {title}
                </h3>
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${style}`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill level indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['Frontend Development', 'Backend Development', 'Database Management'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-dark-gray/50 backdrop-blur-sm p-4 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">{skill}</span>
                  <span className="text-custom-red">90%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-full bg-custom-red rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
