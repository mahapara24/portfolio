import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import project1 from "../../assets/portfolio/project1.png";
import project2 from "../../assets/portfolio/project2.png";
import project3 from "../../assets/portfolio/project3.png";
import project4 from "../../assets/portfolio/project4.png";
import project5 from "../../assets/portfolio/project5.png";
import pedro from "../../assets/portfolio/pedro.png";
import shia from "../../assets/portfolio/shiamatch.png";
import apex from "../../assets/portfolio/apex.png";
import xbyte from "../../assets/portfolio/xbyte.png";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // useEffect(() => {
  //   const projects = document.querySelectorAll(".project-item");

  //   projects.forEach((project) => {
  //     gsap.fromTo(
  //       project.querySelector(".project-image"),
  //       { x: -100, opacity: 0 },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 1,
  //         stagger: true,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: project,
  //           start: "top bottom",
  //           end: "top center",
  //           scrub: 1,
  //           markers: false,
  //         },
  //       }
  //     );

  //     gsap.fromTo(
  //       project.querySelector(".project-content"),
  //       { x: 100, opacity: 0 },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: project,
  //           start: "top bottom",
  //           end: "top center",
  //           scrub: 1,
  //           markers: false,
  //         },
  //       }
  //     );
  //   });
  // }, []);

  const portfolios = [
    {
      id: 4,
      src: project4,
      title: "Expense Tracker React.js App",
      description:
        "Users have the ability to monitor their income and expenses. Google authentication integrated. The application features a basic, responsive user interface and utilizes local storage to store data.",
      technologies: ["Reactjs", "Tailwind css", "Firebase"],
      demoto: "https://expense-tracker-reactjs-eta.vercel.app/",
      codeto: "https://github.com/mahapara24/expense-tracker-reactjs",
    },
    {
      id: 1,
      src: project1,
      title: "Github Log Mern App",
      description:
        "MERN Stack development with GitHub API integration for user authentication, CRUD operations, and seamless error handling.Semantic UI for responsive styling, ensuring a smooth user experience with tailwind css.",
      technologies: [
        "Reactjs",
        "Tailwind css",
        "Github API",
        "MongoDB",
        "Express.js",
        "Passport.js",
      ],
      demoto: "https://github.com/mahapara24/github-log-mern",
      codeto: "https://github.com/mahapara24/github-log-mern",
    },
    {
      id: 2,
      src: project2,
      title: "Music School Next.js",
      description:
        "Fully responsive and interactive UI with multiple pages.Aceternity UI engages users with animated components.",
      technologies: ["Nextjs", "Tailwind css", "Aceternity UI"],
      demoto: "https://music-school-nextjs.vercel.app/",
      codeto: "https://github.com/mahapara24/music-school-nextjs",
    },

    {
      id: 5,
      src: pedro,
      title: "Pedro's Website UI Based Project",
      description:
        "Pedro's Website UI Based Project Using Next js and Tailwind css ",
      technologies: ["Next js", "Tailwind css"],
      demoto: "https://travel-app-modern-ux.vercel.app/",
      codeto:
        "https://github.com/mahapara24/travel-app-modern-ux/blob/main/src/app/layout.tsx",
    },
    {
      id: 6,
      src: shia,
      title: "ShiaMatch Frontend Application",
      description: "ShiaMatch website using React js and Tailwind Css ",
      technologies: ["React js", "Tailwind css"],
      demoto: "https://shia-match-frontend.vercel.app/",
      codeto: "https://github.com/mahapara24/ShiaMatchFrontend",
    },
    {
      id: 7,
      src: apex,
      title: "Apex Frontend Application",
      description: "Apex webiste using Next js and tailwind css ",
      demoto:
        "https://apex-loads-nextjs-tailwindcss-mahapara-6gvnf8k21.vercel.app/",
      codeto:
        "https://github.com/mahapara24/apexLoads-nextjs-tailwindcss-mahapara",
    },
    {
      id: 8,
      src: xbyte,
      title: "Xbyte.io Frontend Application",
      description: "xbyte.io webiste using Next js and tailwind css ",
      demoto: "https://xbyte-frontend-reactjs.vercel.app/",
      codeto: "https://github.com/mahapara24/xbyte-frontend-reactjs",
    },
    {
      id: 3,
      src: project3,
      title: "Password Generator React.js",
      description: "A React.js project for generating secure passwords.",
      technologies: ["React js", "Tailwind css"],
      demoto: "https://password-generator-reactapp.vercel.app/",
      codeto: "https://github.com/mahapara24/password-generator-reactapp",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-primary-gray pt-20 scrollbar-hide scroll-smooth overscroll-x-none sm:pt-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4">
        <div className="pb-4 pt-12 sm:pt-6">
          <h2 className="text-2xl font-bold text-center sm:text-left text-custom-red sm:text-3xl">
            Projects
          </h2>
          <p className="py-2 pb-8 sm:pb-6 text-center sm:text-left text-base sm:text-lg font-normal text-white">
            Check out some of my work here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="project-item flex flex-col items-center rounded-lg p-4 sm:p-6 shadow-md bg-dark-gray/90"
            >
              <img
                src={portfolio.src}
                alt={portfolio.title}
                className="project-image w-full rounded-md mb-4 sm:mb-0 duration-200 hover:scale-105"
                style={{ background: "none" }}
              />

              <div className="flex-1 project-content p-4 sm:p-6">
                <h3 className="text-custom-red text-lg sm:text-xl font-semibold mb-2">
                  {portfolio.title}
                </h3>
                <p className="text-white mb-4 text-sm sm:text-base">
                  {portfolio.description}
                </p>
                {portfolio.technologies && (
                  <div className="mb-4 flex flex-wrap">
                    {portfolio.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-custom-red px-3 py-1 rounded-md mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  <button className="w-full sm:w-auto px-4 py-2 duration-200 hover:bg-custom-red hover:text-black rounded-md hover:scale-105 text-white text-sm">
                    <Link
                      to={portfolio.demoto}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Demo
                    </Link>
                  </button>
                  <button className="w-full sm:w-auto px-4 py-2 duration-200 hover:bg-custom-red hover:text-black rounded-md hover:scale-105 text-white text-sm">
                    <Link
                      to={portfolio.codeto}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Code
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
