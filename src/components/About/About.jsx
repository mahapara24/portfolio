import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: <FaCode className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React and modern CSS frameworks"
    },
    {
      icon: <FaLaptopCode className="h-8 w-8" />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js and Express"
    },
    {
      icon: <FaServer className="h-8 w-8" />,
      title: "Database Management",
      description: "Working with MongoDB and other databases to create efficient data structures"
    },
    {
      icon: <FaTools className="h-8 w-8" />,
      title: "Development Tools",
      description: "Utilizing modern development tools and practices for efficient workflow"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div id="about" className="min-h-screen py-20 px-4 bg-primary-gray relative overflow-hidden">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-custom-red mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm Mahapara, a passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating responsive, user-friendly applications that combine functionality 
              with aesthetic appeal.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              My tech stack includes JavaScript, ReactJS, Node.js, ExpressJs, MongoDB, and Tailwind CSS. 
              I'm committed to continuous learning and staying current with industry trends to deliver 
              high-quality solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-custom-red text-black font-semibold rounded-lg shadow-glow-custom-red hover:bg-custom-red/90 transition-colors duration-300"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-gray/50 backdrop-blur-sm p-6 rounded-xl border border-custom-red/20 hover:border-custom-red/40 transition-colors duration-300"
              >
                <div className="text-custom-red mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
