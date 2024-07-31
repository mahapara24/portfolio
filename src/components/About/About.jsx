import React, { useEffect } from "react";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    // Animation for the heading
    gsap.fromTo(
      ".about-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animation for the paragraph
    gsap.fromTo(
      ".about-paragraph",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div
      id="about"
      className="h-screen scrollbar-hide scroll-smooth w-full overflow-y-auto pt-20 sm:pt-20 pt pb-5 px-2 bg-primary-gray"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center py-5 px-5 text-center sm:text-left">
        <div>
          <h2 className="about-heading text-2xl sm:text-4xl text-custom-red font-bold">
            About
          </h2>
        </div>
        <p className="about-paragraph text-[17px] rounded-lg mt-4 font-normal py-2 sm:text-[20px] sm:font-base sm:tracking-widest text-white">
          I'm Mahapara, I possess a strong foundation in JavaScript, ReactJS,
          Node.js, ExpressJs, MongoDB, and the Tailwind CSS framework. My
          expertise lies in building web applications that are both functional
          and visually appealing with proper functionality. I have successfully
          contributed to various projects, demonstrating my proficiency in
          creating responsive and dynamic web solutions. My commitment to
          learning and staying up-to-date with industry trends allows me to
          adapt and deliver high-quality, user-friendly applications.
        </p>
      </div>
    </div>
  );
};

export default About;
