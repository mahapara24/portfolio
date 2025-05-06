import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCode, FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    date: "Sep 2024 - Nov 2024",
    role: "Full Stack Developer Intern",
    company: "Indus Technetronic",
    description:
      "Worked on the Netaxx project, building UI components with Tailwind CSS and Tailwind Parts to ensure responsiveness. Also handled API integration for the contact form.",
    technologies: ["Next.js", "Tailwind css"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    date: "Sep 2024 - Oct 2024",
    role: "Frontend Developer Intern",
    company: "2ndPlace",
    description:
      "Collaborated with a team to develop the 2ndPlace website using React.js and Material UI, building responsive layouts and implementing location-based search functionality.",
    technologies: ["React.js", "Material UI"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    date: "June 2024 - Aug 2024",
    role: "Web Developer Intern",
    company: "Movmi",
    description:
      "Developed Movmi official web application using Next.js, contributing 80% to the frontend design using tailwind shadcn, gsap and implemented a responsive user interface.",
    technologies: [
      "Next.js",
      "Tailwind css",
      "Shadcn",
      "GSAP",
      "Authentication",
    ],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    date: "Dec 2023 - Feb 2024",
    role: "Frontend Developer",
    company: "Recepio Limited",
    description:
      "Worked on a project and designed the landing page, with ReactJS and Tailwind CSS, contributing to approximately 60% of the project's frontend design. Collaborated with a team of three members.Utilized APIs for data handling.",
    technologies: ["React.js", "Tailwind css", "API"],
    color: "from-orange-500/20 to-red-500/20"
  },
];

const TimelineItem = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline connector with gradient */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-custom-red/50 to-transparent" />
      )}

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Date and Role Card */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          className="md:w-1/3 flex flex-col items-start relative group"
        >
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-custom-red/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
          
          <div className="relative bg-dark-gray/80 backdrop-blur-sm p-6 rounded-lg border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300 w-full">
            <div className="flex items-center gap-2 text-custom-red mb-2">
              <FaCalendarAlt className="h-4 w-4" />
              <span className="text-sm font-medium">{experience.date}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-custom-red transition-colors duration-300">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-custom-red">
              <FaBriefcase className="h-4 w-4" />
              <span className="text-sm">{experience.company}</span>
            </div>

            {/* Hover effect overlay */}
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

        {/* Content Card */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="md:w-2/3 relative group"
        >
          {/* Card glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300`} />
          
          <div className="relative bg-dark-gray/80 backdrop-blur-sm p-6 rounded-lg border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300">
            <p className="text-gray-300 mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-custom-red/10 text-custom-red px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-custom-red/20 transition-colors duration-300"
                >
                  <FaCode className="h-3 w-3" />
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Hover effect overlay */}
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
      </div>
    </motion.div>
  );
};

function Experience() {
  return (
    <div id="experience" className="min-h-screen py-20 px-4 bg-primary-gray relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        {/* Animated gradient overlay */}
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

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(255,77,77,0.05) 0%, rgba(64,209,255,0.05) 100%)',
              'linear-gradient(135deg, rgba(64,209,255,0.05) 0%, rgba(255,77,77,0.05) 100%)',
              'linear-gradient(45deg, rgba(255,77,77,0.05) 0%, rgba(64,209,255,0.05) 100%)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-custom-red mb-4 relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Journey
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
            My experience in building and delivering impactful web solutions
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,77,77,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            href="MAHAPARA-SOFTWARE-DEVELOPER.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-custom-red text-black font-semibold rounded-lg shadow-glow-custom-red hover:bg-custom-red/90 transition-colors duration-300 relative overflow-hidden group"
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <FaBriefcase className="h-5 w-5" />
            <span className="relative z-10">Download Full Resume</span>
            <motion.div
              className="relative z-10"
              animate={{
                x: [0, 5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
