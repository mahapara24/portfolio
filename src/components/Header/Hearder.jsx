import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-dark-gray/95 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-14">
          {/* Refined Professional Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <motion.h1 
                className="text-xl font-bold tracking-wider relative"
              >
                {/* First Name with Subtle Effects */}
                <motion.span 
                  className="relative inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #ff4d4d, #40D1FF, #ff4d4d)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Mahapara
                </motion.span>

                {/* Last Name with Minimal Animation */}
                <motion.span 
                  className="text-white ml-1"
                >
                  Nizamani
                </motion.span>

                {/* Subtle Hover Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-custom-red via-blue-500 to-custom-red rounded-lg opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.h1>

              {/* Minimal Underline */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="h-full w-full bg-gradient-to-r from-custom-red via-blue-500 to-custom-red"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 100%'
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Scroll
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <NavLink
                    to={`/${item.to}`}
                    className={({ isActive }) =>
                      `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                        activeSection === item.to
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {item.label}
                    {activeSection === item.to && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-custom-red"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className="absolute inset-0 bg-custom-red/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </NavLink>
                </Scroll>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setNav(!nav)}
            className="md:hidden text-custom-red p-1.5"
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-dark-gray/95 backdrop-blur-sm"
          >
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full space-y-6"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Scroll
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <NavLink
                      to={`/${item.to}`}
                      onClick={() => setNav(false)}
                      className={({ isActive }) =>
                        `text-xl font-medium transition-all duration-300 relative group ${
                          activeSection === item.to
                            ? "text-white"
                            : "text-gray-300 hover:text-white"
                        }`
                      }
                    >
                      {item.label}
                      {activeSection === item.to && (
                        <motion.div
                          layoutId="activeSectionMobile"
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-custom-red"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </NavLink>
                  </Scroll>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
