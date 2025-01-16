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
        {" "}
        <h2 className="about-heading text-center text-2xl sm:text-4xl text-custom-red font-bold">
          About Me
        </h2>
        <div className="about-paragraph justify-between flex flex-">
          {" "}
          <div className="w-1/2 bg">
            <p className="about-paragraph text-[17px] rounded-lg mt-4 font-normal py-2 sm:text-[20px] sm:font-base sm:tracking-widest text-white">
              <>
                {" "}
                <h2 className="font-extrabold text-custom-red ">Frontend</h2>
                <ul className="">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Tailwind Css</li>
                  <li>Material UI</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                </ul>
              </>
              <>
                {" "}
                <h2 className="font-extrabold text-custom-red ">Backend</h2>
                <ul className=" ">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Mongo Db</li>
                  <li>Tailwind Css</li>
                  <li>Material UI</li>
                </ul>
              </>
            </p>
          </div>
          <div className="w-1/2">
            <p className="about-paragraph text-[17px] rounded-lg mt-4 font-normal py-2 sm:text-[20px]  sm:font-base sm:tracking-widest text-white">
              <h2 className="text-custom-red mb-4 text-[19px] sm:text-[22px]">
                A bit about me
              </h2>
              Hi, I'm Mahapara, a passionate developer specializing in building
              full-stack web applications that are both functional and visually
              engaging. With hands-on experience in creating responsive and
              dynamic solutions, I take pride in delivering high-quality,
              user-friendly applications that meet modern standards.
              Continuously learning and evolving with industry trends, I am
              dedicated to crafting impactful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
