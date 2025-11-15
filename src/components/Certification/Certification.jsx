import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Certification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "Certificate of Internship Completion at Recepio",
      description: "Advanced certification in modern software engineering practices",
      file: "/recepioCertificate.pdf",
      category: "Engineering",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      type: "pdf"
    },
    {
      id: 2,
      title: "Certificate of Internship Completion at Movmi",
      description: "Certificate of Internship Completion at Movmi",
      file: "/movmiCertificate.pdf",
      category: "Development",
      icon: "🎯",
      color: "from-emerald-500 to-teal-500",
      type: "pdf"
    },
    {
      id: 3,
      title: "Certificate of Internship Completion at 2ndPlace",
      file: "/2ndPlaceCertificate.pdf",
      type: "pdf"
    },
    {
      id: 4,
      title: "Certification of Internship Completion at Indus Technetronic",
      file: "/IndusTech.pdf",
      type: "pdf"
    },
    {
      id: 5,
      title: "FYP Certificate",
      file: "/fyp.jpeg",
      type: "image"
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getDownloadFilename = (cert) => {
    // Convert title to a valid filename
    let filename = cert.title
      .replace(/[<>:"/\\|?*]/g, '') // Remove invalid filename characters
      .replace(/\s+/g, '_') // Replace spaces with underscore
      .replace(/_+/g, '_') // Replace multiple underscores with single
      .trim();
    
    // Add appropriate extension
    if (cert.type === "image") {
      // Get extension from file path
      const ext = cert.file.split('.').pop();
      return `${filename}.${ext}`;
    } else {
      return `${filename}.pdf`;
    }
  };

  return (
    <div id="certifications" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary-gray relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-custom-red mb-3 sm:mb-4 relative inline-block px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Certifications
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-custom-red"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4 sm:mt-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional certifications that validate my expertise and continuous learning journey
          </motion.p>
        </motion.div>

        {/* Certificates Slider */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-lg">
            <AnimatePresence mode="wait" custom={direction}>
              {certificates.map((cert, index) => {
                if (index !== currentIndex) return null;
                
                return (
                  <motion.div
                    key={cert.id}
                    custom={direction}
                    initial={direction === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: direction * 250 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -250 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative group"
                  >
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-custom-red/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                    
                    {/* Main Card */}
                    <div className="relative bg-dark-gray/80 backdrop-blur-sm rounded-lg border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300 overflow-hidden">
                      {/* Title Section */}
                      <div className="p-3 sm:p-4 md:p-6 text-center border-b border-custom-red/20">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-custom-red transition-colors duration-300 break-words px-2">
                          {cert.title}
                        </h3>
                      </div>

                      {/* PDF/Image Viewer */}
                      <div className="relative bg-gray-800/30 p-2 sm:p-3 md:p-4">
                        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-lg overflow-hidden border border-custom-red/20 bg-white flex items-center justify-center">
                          {cert.type === "image" ? (
                            <img
                              src={cert.file}
                              alt={cert.title}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <iframe
                              src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                              className="w-full h-full"
                              title={cert.title}
                              style={{ border: 'none' }}
                              allow="fullscreen"
                            />
                          )}
                        </div>
                        
                        {/* Download Button Overlay */}
                        <motion.a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={getDownloadFilename(cert)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 bg-custom-red text-white font-semibold py-1.5 px-2.5 sm:py-2 sm:px-4 rounded-lg shadow-lg hover:bg-custom-red/90 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 z-10 text-xs sm:text-sm touch-manipulation"
                        >
                          <svg className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="hidden sm:inline">{cert.type === "image" ? "Download Image" : "Download PDF"}</span>
                          <span className="sm:hidden">Download</span>
                        </motion.a>
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
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-dark-gray/90 backdrop-blur-sm text-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:bg-dark-gray active:bg-dark-gray/80 border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300 touch-manipulation min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center"
              aria-label="Previous certificate"
            >
              <FaChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-dark-gray/90 backdrop-blur-sm text-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:bg-dark-gray active:bg-dark-gray/80 border border-custom-red/20 hover:border-custom-red/40 transition-all duration-300 touch-manipulation min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center"
              aria-label="Next certificate"
            >
              <FaChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8 flex-wrap px-2">
            {certificates.map((cert, index) => (
              <motion.button
                key={cert.id}
                onClick={() => goToSlide(index)}
                className={`relative w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentIndex 
                    ? 'bg-custom-red scale-125' 
                    : 'bg-gray-600 hover:bg-custom-red/50 active:bg-custom-red/70'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to ${cert.title}`}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-custom-red"
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Certificate Info */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mt-4 sm:mt-6"
          >
            <p className="text-gray-400 text-xs sm:text-sm">
              {currentIndex + 1} of {certificates.length}
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Certification;

