import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCode } from "react-icons/fa";

const experiences = [
  {
    date: "Sep 2024 - Nov 2024",
    role: "Full Stack Developer Intern",
    company: "Indus Technetronic",
    description:
      "Worked on the Netaxx project, building UI components with Tailwind CSS and Tailwind Parts to ensure responsiveness. Also handled API integration for the contact form.",
    technologies: ["Next.js", "Tailwind css"],
  },
  {
    date: "Sep 2024 - Oct 2024",
    role: "Frontend Developer Intern",
    company: "2ndPlace",
    description:
      "Collaborated with a team to develop the 2ndPlace website using React.js and Material UI, building responsive layouts and implementing location-based search functionality.",
    technologies: ["React.js", "Material UI"],
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
  },
  {
    date: "Dec 2023 - Feb 2024",
    role: "Frontend Developer",
    company: "Recepio Limited",
    description:
      "Worked on a project and designed the landing page, with ReactJS and Tailwind CSS, contributing to approximately 60% of the project's frontend design. Collaborated with a team of three members.Utilized APIs for data handling.",
    technologies: ["React.js", "Tailwind css", "API"],
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
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Date and Role */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:w-1/3 flex flex-col items-start"
        >
          <div className="flex items-center gap-2 text-custom-red mb-2">
            <FaCalendarAlt className="h-4 w-4" />
            <span className="text-sm font-medium">{experience.date}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
          <div className="flex items-center gap-2 text-custom-red">
            <FaBriefcase className="h-4 w-4" />
            <span className="text-sm">{experience.company}</span>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="md:w-2/3 bg-dark-gray/50 backdrop-blur-sm p-6 rounded-xl border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300"
        >
          <p className="text-gray-300 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-custom-red/10 text-custom-red px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
              >
                <FaCode className="h-3 w-3" />
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline connector */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-1/2 top-full w-0.5 h-8 bg-custom-red/30" />
      )}
    </motion.div>
  );
};

function Experience() {
  return (
    <div id="experience" className="min-h-screen py-20 px-4 bg-primary-gray relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-gray via-dark-gray to-secondary-gray opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-red/5 via-transparent to-transparent animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-custom-red mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-custom-red mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My experience in building and delivering impactful web solutions
          </p>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="MAHAPARA-SOFTWARE-DEVELOPER.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-custom-red text-black font-semibold rounded-lg shadow-glow-custom-red hover:bg-custom-red/90 transition-colors duration-300"
          >
            <FaBriefcase className="h-5 w-5" />
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
