import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      title: "Email",
      value: "mahapara2424@gmail.com",
      link: "mailto:mahapara2424@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="h-6 w-6" />,
      title: "Location",
      value: "Islamabad, Pakistan",
      link: "#"
    },
    {
      icon: <FaPhone className="h-6 w-6" />,
      title: "Phone",
      value: "+92 3133954044",
      link: "tel:+923133954044"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mahapara-nizamani-1ba88b292/",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: <FaGithub className="h-6 w-6" />,
      title: "GitHub",
      link: "https://github.com/mahapara24",
      color: "hover:text-[#333]"
    }
  ];

  return (
    <div id="contact" className="w-full bg-primary-gray relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-gray via-dark-gray to-secondary-gray opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-custom-red/5 via-transparent to-transparent animate-pulse"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-red mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-custom-red mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 md:mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 bg-dark-gray/50 backdrop-blur-sm rounded-xl border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-custom-red mb-4"
              >
                {info.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-gray-400 text-center text-sm md:text-base">{info.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-8">Connect With Me</h3>
          <div className="flex justify-center gap-6 md:gap-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.title}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                className={`text-gray-400 ${social.color} transition-colors duration-300 p-4 bg-dark-gray/50 backdrop-blur-sm rounded-full border border-custom-red/20 hover:border-custom-red/40`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
