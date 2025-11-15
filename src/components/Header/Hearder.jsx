import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();
  const clickedSectionRef = useRef(null);

  useEffect(() => {
    // Update active section based on current path
    const path = location.pathname.replace('/', '');
    setActiveSection(path || 'home');
  }, [location]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header background animation
      gsap.to(headerRef.current, {
        scrollTrigger: {
          start: "top -50",
          end: "top -50",
          toggleActions: "play none none reverse",
        },
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
      });

      // Logo animation
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
      });

      // Navigation items animation
      gsap.from(".nav-item", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    // Set active section immediately for instant feedback
    setActiveSection(section);
    clickedSectionRef.current = section;
    setNav(false);
    
    // Clear the clicked ref after scroll animation completes
    setTimeout(() => {
      clickedSectionRef.current = null;
    }, 600);
  };

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "certifications", label: "Certifications" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-dark-gray/95 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center">
            <NavLink to="/" className="relative group cursor-pointer">
              <h1 className="text-xl font-bold tracking-wider relative">
                <span 
                  className="relative inline-block bg-gradient-to-r from-custom-red via-blue-500 to-custom-red bg-clip-text text-transparent"
                >
                  Mahapara
                </span>
                <span className="text-white ml-1">
                  Nizamani
                </span>
              </h1>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-custom-red via-blue-500 to-custom-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.to} className="nav-item">
                <Scroll
                  activeClass="active"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNavClick(item.to)}
                  onSetActive={(to) => {
                    // Only update if we clicked this section, or if no click happened (normal scroll)
                    if (!clickedSectionRef.current || clickedSectionRef.current === to) {
                      setActiveSection(to);
                    }
                  }}
                >
                  <button
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                      activeSection === item.to
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.to && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-custom-red" />
                    )}
                    <span className="absolute inset-0 bg-custom-red/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Scroll>
              </div>
            ))}
          </nav>

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
              {navItems.map((item) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Scroll
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => handleNavClick(item.to)}
                    onSetActive={(to) => {
                      // Update active section immediately when section becomes active
                      setActiveSection(to);
                    }}
                  >
                    <button
                      className={`text-xl font-medium transition-all duration-300 relative group ${
                        activeSection === item.to
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {activeSection === item.to && (
                        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-custom-red" />
                      )}
                    </button>
                  </Scroll>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
