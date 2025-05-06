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
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500", category: "Frontend" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500", category: "Frontend" },
    { id: 3, src: tailwind, title: "Tailwind", style: "shadow-cyan-500", category: "Frontend" },
    { id: 4, src: js, title: "JavaScript", style: "shadow-yellow-500", category: "Frontend" },
    { id: 5, src: python, title: "Python", style: "shadow-green-500", category: "Backend" },
    { id: 6, src: react, title: "ReactJS", style: "shadow-blue-500", category: "Frontend" },
    { id: 7, src: ts, title: "TypeScript", style: "shadow-blue-500", category: "Frontend" },
    { id: 8, src: node, title: "NodeJS", style: "shadow-green-500", category: "Backend" },
    { id: 9, src: expressjs, title: "ExpressJs", style: "shadow-gray-500", category: "Backend" },
    { id: 10, src: mongoDb, title: "MongoDB", style: "shadow-green-500", category: "Backend" },
    { id: 11, src: Nextjs, title: "NextJS", style: "shadow-white", category: "Frontend" },
    { id: 12, src: git, title: "Git", style: "shadow-orange-500", category: "Tools" },
  ];

  return (
    <div id="skills" className="min-h-screen py-20 px-4 bg-primary-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(255,77,77,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(64,209,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(255,77,77,0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-custom-red mb-4 relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-custom-red"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: -5,
              }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-custom-red/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-dark-gray/80 backdrop-blur-sm p-6 rounded-lg border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300 h-full">
                {/* Skill Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mb-4"
                >
                  <img 
                    className="h-12 w-12 object-contain filter group-hover:brightness-110 transition-all duration-300" 
                    src={tech.src} 
                    alt={tech.title} 
                  />
                </motion.div>

                {/* Skill Title */}
                <h3 className="text-lg font-semibold text-white text-center group-hover:text-custom-red transition-colors duration-300">
                  {tech.title}
                </h3>

                {/* Category Badge */}
                <div className="absolute top-2 right-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-custom-red/10 text-custom-red">
                    {tech.category}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-custom-red/5 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
