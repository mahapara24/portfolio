import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Home() {
  const [text] = useTypewriter({
    words: ["Mahapara", "Software Developer", "Full Stack Developer", "UI/UX Enthusiast"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-gray via-dark-gray to-secondary-gray opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-red/10 via-transparent to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-2xl sm:text-3xl text-gray-300 font-light mb-4">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Hello, I'm{" "}
              <span className="text-custom-red relative">
                {text}
                <Cursor cursorStyle="|" cursorColor="#40D1FF" />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto sm:mx-0">
              Crafting beautiful and functional web experiences with modern technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center sm:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group flex items-center gap-2 bg-custom-red hover:bg-custom-red/90 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-glow-custom-red"
            >
              <a
                href="MAHAPARA-SOFTWARE-DEVELOPER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Download Resume
                <BsFillPersonLinesFill className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.button>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-custom-red transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-custom-red transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-custom-red transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block cursor-pointer"
            onClick={() => {
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }}
            title="Scroll to About"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-6 h-10 border-2 border-custom-red rounded-full flex justify-center group"
            >
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-2 bg-custom-red rounded-full mt-2 group-hover:bg-white transition-colors duration-300"
              />
           
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
