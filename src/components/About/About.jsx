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

  return (
    <div id="about" className="min-h-screen py-20 px-4 bg-primary-gray relative overflow-hidden">
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

        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}>
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0 0', '40px 40px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>
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
            About Me
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-custom-red"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 relative"
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-custom-red/5 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-blue-500/5 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm Mahapara, a passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating responsive, user-friendly applications that combine functionality 
              with aesthetic appeal.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My tech stack includes JavaScript, ReactJS, Node.js, ExpressJs, MongoDB, and Tailwind CSS. 
              I'm committed to continuous learning and staying current with industry trends to deliver 
              high-quality solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255,77,77,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-custom-red text-black font-semibold rounded-lg shadow-glow-custom-red hover:bg-custom-red/90 transition-colors duration-300 relative overflow-hidden group"
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
                <span className="relative z-10">Let's Connect</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255,77,77,0.1)",
                }}
                className="bg-dark-gray/50 backdrop-blur-sm p-6 rounded-xl border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-custom-red/5 to-transparent"
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
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-custom-red mb-4 relative z-10"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2 relative z-10 group-hover:text-custom-red transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-400 relative z-10">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
