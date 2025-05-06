import React, { useEffect, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const controls = useAnimation();
  const [text] = useTypewriter({
    words: ["Mahapara", "Software Developer", "Full Stack Developer", "UI/UX Enthusiast"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const backgroundRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });

    const ctx = gsap.context(() => {
      // Background fade in
      gsap.fromTo(backgroundRef.current,
        { opacity: 0 },
        { 
          opacity: 1,
          duration: 2,
          ease: "power2.out"
        }
      );

      // Title elastic entrance
      gsap.fromTo(titleRef.current,
        { 
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        { 
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)"
        }
      );

      // Text fade in
      gsap.fromTo(textRef.current,
        { 
          y: 50,
          opacity: 0
        },
        { 
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out"
        }
      );

      // Buttons entrance
      gsap.fromTo(buttonsRef.current,
        { 
          y: 30,
          opacity: 0
        },
        { 
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.8,
          ease: "power2.out"
        }
      );

      // Stars animation
      gsap.fromTo(starsRef.current.children,
        { 
          scale: 0,
          opacity: 0
        },
        { 
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }
      );

      // Continuous animations
      gsap.to(".floating-element", {
        y: "20px",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Mouse move parallax
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(".parallax-element", {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, [controls]);

  return (
    <div ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
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

        {/* Animated glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-custom-red/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Sparkling Stars */}
        <div ref={starsRef} className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 2px rgba(255,255,255,0.4)'
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`large-${i}`}
              className="absolute w-1 h-1 bg-custom-red rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 4px rgba(255,77,77,0.3)'
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`blue-${i}`}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 4px rgba(64,209,255,0.3)'
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center sm:text-left"
        >
          {/* Welcome Text with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 relative"
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

            <motion.h2 
              ref={titleRef}
              className="text-2xl sm:text-3xl text-gray-200 font-light mb-4 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(255,255,255,0.1)',
                    '0 0 10px rgba(255,255,255,0.2)',
                    '0 0 5px rgba(255,255,255,0.1)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Welcome to my portfolio
              </motion.span>
            </motion.h2>

            <motion.h1 
              ref={titleRef}
              className="text-4xl sm:text-6xl font-bold text-white mb-4 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hello, I'm{" "}
              <motion.span 
                className="text-custom-red relative inline-block"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(255,77,77,0.5)',
                    '0 0 10px rgba(255,77,77,0.5)',
                    '0 0 5px rgba(255,77,77,0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {text}
                <Cursor cursorStyle="|" cursorColor="#40D1FF" />
              </motion.span>
            </motion.h1>

            <motion.p 
              ref={textRef}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto sm:mx-0 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  textShadow: [
                    '0 0 5px rgba(255,255,255,0.05)',
                    '0 0 10px rgba(255,255,255,0.1)',
                    '0 0 5px rgba(255,255,255,0.05)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Crafting beautiful and functional web experiences with modern technologies
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            ref={buttonsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center sm:justify-start relative"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(255,77,77,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group flex items-center gap-2 bg-custom-red text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-glow-custom-red relative overflow-hidden"
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
              {/* Hover color transition overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-900/0 via-gray-900/0 to-gray-900/0"
                whileHover={{
                  background: [
                    'linear-gradient(to right, rgba(17,24,39,0.3), rgba(255,77,77,0.2))',
                    'linear-gradient(to right, rgba(255,77,77,0.2), rgba(17,24,39,0.3))',
                    'linear-gradient(to right, rgba(17,24,39,0.3), rgba(255,77,77,0.2))'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <a
                href="MAHAPARA-SOFTWARE-DEVELOPER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center relative z-10 text-black transition-colors duration-300"
              >
                Download Resume
                <motion.div
                  className="ml-2"
                  animate={{
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <BsFillPersonLinesFill className="h-5 w-5 text-black transition-colors duration-300" />
                </motion.div>
              </a>
            </motion.button>

            {/* Enhanced Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <FaGithub className="h-6 w-6" />, href: "https://github.com/yourusername", color: "hover:text-[#333]" },
                { icon: <FaLinkedin className="h-6 w-6" />, href: "https://linkedin.com/in/yourusername", color: "hover:text-[#0077B5]" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: "0 0 15px rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors p-3 bg-dark-gray/50 backdrop-blur-sm rounded-full border border-custom-red/20 hover:border-custom-red/40 relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  {/* Social icon glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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
                  <span className="relative z-10">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              const headerOffset = 70;
              const elementPosition = aboutSection.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }}
            title="Scroll to About"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="w-6 h-10 border-2 border-custom-red rounded-full flex justify-center group relative overflow-hidden"
            >
              {/* Scroll indicator glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-custom-red/20 to-transparent"
                animate={{
                  y: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                className="w-1 h-2 bg-custom-red rounded-full mt-2 group-hover:bg-white transition-colors duration-300 relative z-10"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
