import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      title: "Email",
      value: "mahapara2424@gmail.com",
      link: "mailto:mahapara2424@gmail.com",
      color: "from-blue-500/20 to-cyan-500/20",
      description: "Feel free to reach out for collaborations or opportunities"
    },
    {
      icon: <FaMapMarkerAlt className="h-6 w-6" />,
      title: "Location",
      value: "Islamabad, Pakistan",
      link: "#",
      color: "from-purple-500/20 to-pink-500/20",
      description: "Open to remote work and local opportunities"
    },
    {
      icon: <FaPhone className="h-6 w-6" />,
      title: "Phone",
      value: "+92 3133954044",
      link: "tel:+923133954044",
      color: "from-green-500/20 to-emerald-500/20",
      description: "Available for calls during business hours"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mahapara-nizamani-1ba88b292/",
      color: "hover:text-[#0077B5]",
      bgColor: "from-[#0077B5]/20 to-[#0077B5]/10",
      description: "Connect with me on LinkedIn"
    },
    {
      icon: <FaGithub className="h-6 w-6" />,
      title: "GitHub",
      link: "https://github.com/mahapara24",
      color: "hover:text-[#333]",
      bgColor: "from-[#333]/20 to-[#333]/10",
      description: "Check out my projects on GitHub"
    }
  ];

  return (
    <div id="contact" className="w-full bg-primary-gray relative overflow-hidden min-h-screen">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-gray via-dark-gray to-secondary-gray opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-red/5 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-custom-red mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-custom-red mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="block"
              >
                <div className={`relative group p-6 bg-dark-gray/50 backdrop-blur-sm rounded-xl border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300 overflow-hidden`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="text-custom-red"
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                        <p className="text-gray-400">{info.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 ml-12">{info.description}</p>
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
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Connect With Me</h3>
            <div className="grid grid-cols-1 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative group p-6 bg-dark-gray/50 backdrop-blur-sm rounded-xl border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300 overflow-hidden`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    >
                      {social.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{social.title}</h3>
                      <p className="text-sm text-gray-400">{social.description}</p>
                    </div>
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
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
