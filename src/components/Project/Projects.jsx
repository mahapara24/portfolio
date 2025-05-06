import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaFilter } from "react-icons/fa";
import project1 from "../../assets/portfolio/project1.png";
import project2 from "../../assets/portfolio/project2.png";
import project3 from "../../assets/portfolio/project3.png";
import project4 from "../../assets/portfolio/project4.png";
import project5 from "../../assets/portfolio/project5.png";
import pedro from "../../assets/portfolio/pedro.png";
import shia from "../../assets/portfolio/shiamatch.png";
import apex from "../../assets/portfolio/apex.png";
import xbyte from "../../assets/portfolio/xbyte.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const portfolios = [
    {
      id: 4,
      src: project4,
      title: "Expense Tracker React.js App",
      description:
        "Users have the ability to monitor their income and expenses. Google authentication integrated. The application features a basic, responsive user interface and utilizes local storage to store data.",
      technologies: ["Reactjs", "Tailwind css", "Firebase"],
      demoto: "https://expense-tracker-reactjs-eta.vercel.app/",
      codeto: "https://github.com/mahapara24/expense-tracker-reactjs",
      category: "Full Stack"
    },
    {
      id: 1,
      src: project1,
      title: "Github Log Mern App",
      description:
        "MERN Stack development with GitHub API integration for user authentication, CRUD operations, and seamless error handling.Semantic UI for responsive styling, ensuring a smooth user experience with tailwind css.",
      technologies: [
        "Reactjs",
        "Tailwind css",
        "Github API",
        "MongoDB",
        "Express.js",
        "Passport.js",
      ],
      demoto: "https://github.com/mahapara24/github-log-mern",
      codeto: "https://github.com/mahapara24/github-log-mern",
      category: "Full Stack"
    },
    {
      id: 2,
      src: project2,
      title: "Music School Next.js",
      description:
        "Fully responsive and interactive UI with multiple pages.Aceternity UI engages users with animated components.",
      technologies: ["Nextjs", "Tailwind css", "Aceternity UI"],
      demoto: "https://music-school-nextjs.vercel.app/",
      codeto: "https://github.com/mahapara24/music-school-nextjs",
      category: "Full Stack"
    },
    {
      id: 5,
      src: pedro,
      title: "Pedro's Website UI Based Project",
      description:
        "Pedro's Website UI Based Project Using Next js and Tailwind css ",
      technologies: ["Next js", "Tailwind css"],
      demoto: "https://travel-app-modern-ux.vercel.app/",
      codeto:
        "https://github.com/mahapara24/travel-app-modern-ux/blob/main/src/app/layout.tsx",
      category: "Frontend"
    },
    {
      id: 6,
      src: shia,
      title: "ShiaMatch Frontend Application",
      description: "ShiaMatch website using React js and Tailwind Css ",
      technologies: ["React js", "Tailwind css"],
      demoto: "https://shia-match-frontend.vercel.app/",
      codeto: "https://github.com/mahapara24/ShiaMatchFrontend",
      category: "Frontend"
    },
    {
      id: 7,
      src: apex,
      title: "Apex Frontend Application",
      description: "Apex webiste using Next js and tailwind css ",
      technologies: ["React js", "Tailwind css"],
      demoto:
        "https://apex-loads-nextjs-tailwindcss-mahapara-6gvnf8k21.vercel.app/",
      codeto:
        "https://github.com/mahapara24/apexLoads-nextjs-tailwindcss-mahapara",
      category: "Frontend"
    },
    {
      id: 8,
      src: xbyte,
      title: "Xbyte.io Frontend Application",
      description: "xbyte.io webiste using Next js and tailwind css ",
      technologies: ["React js", "Tailwind css"],
      demoto: "https://xbyte-frontend-reactjs.vercel.app/",
      codeto: "https://github.com/mahapara24/xbyte-frontend-reactjs",
      category: "Frontend"
    },
    {
      id: 3,
      src: project3,
      title: "Password Generator React.js",
      description: "A React.js project for generating secure passwords.",
      technologies: ["React js", "Tailwind css"],
      demoto: "https://password-generator-reactapp.vercel.app/",
      codeto: "https://github.com/mahapara24/password-generator-reactapp",
      category: "Backend"
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? portfolios 
    : portfolios.filter(project => project.category === activeFilter);

  return (
    <div id="projects" className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-red/20 via-transparent to-transparent animate-pulse"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-custom-red mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-custom-red mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                ${activeFilter === category 
                  ? 'bg-custom-red text-black shadow-glow-custom-red' 
                  : 'bg-dark-gray/50 text-gray-300 hover:bg-custom-red/20'}`}
            >
              <FaFilter className="h-4 w-4" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(portfolio.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="bg-dark-gray/50 backdrop-blur-sm rounded-xl overflow-hidden border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300">
                  {/* Project Image with Enhanced Hover Effect */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={portfolio.src}
                      alt={portfolio.title}
                      className="w-full h-48 object-cover"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === portfolio.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-dark-gray/90 to-transparent"
                    >
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={portfolio.demoto}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-custom-red text-black px-4 py-2 rounded-lg text-center font-medium hover:bg-custom-red/90 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt className="inline-block mr-2" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={portfolio.codeto}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-dark-gray text-custom-red px-4 py-2 rounded-lg text-center font-medium hover:bg-custom-red/10 transition-colors duration-300"
                        >
                          <FaGithub className="inline-block mr-2" />
                          View Code
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content with Enhanced Styling */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-custom-red transition-colors duration-300">
                        {portfolio.title}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-custom-red/10 text-custom-red">
                        {portfolio.category}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">
                      {portfolio.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {portfolio.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 0, 0, 0.2)" }}
                          className="bg-custom-red/10 text-custom-red px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 transition-colors duration-300"
                        >
                          <FaCode className="h-3 w-3" />
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced GitHub Stats Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/mahapara24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-custom-red text-black font-semibold rounded-lg shadow-glow-custom-red hover:bg-custom-red/90 transition-all duration-300"
          >
            <FaGithub className="h-5 w-5" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
