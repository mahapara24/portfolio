import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    date: "June 2024 - Aug 2024",
    role: "Full Stack Developer Intern",
    company: "Movmi",
    description:
      "Developed a web application using Next.js, contributing 70% to the frontend design using Tailwind, Shadcn, GSAP and 40% to backend functionalities, including Google authentication integration.Implemented a responsive user interface and local storage for data management.",
    technolgies: [
      "Next.js",
      "Tailwind css",
      "Shadcn",
      "GSAP",
      "Authentication",
    ],
  },
  {
    date: "Dec 2023 - Feb 2024",
    role: "Frontend Developer",
    company: "Recepio Limited",
    description:
      "Worked on a project and designed the landing page, with ReactJS and Tailwind CSS, contributing to approximately 60% of the project's frontend design. Collaborated with a team of three members.Utilized APIs for data handling, comprising 30% of frontend functionality.",
    technolgies: ["React.js", "Tailwind css", "API"],
  },
];

const Timeline = ({ experiences }) => {
  useEffect(() => {
    const timelineItems = gsap.utils.toArray(".timeline-item");

    timelineItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () =>
              gsap.fromTo(
                item,
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  stagger: 0.2,
                  ease: "power2.out",
                }
              ),
            onLeaveBack: () =>
              gsap.fromTo(
                item,
                { opacity: 1, y: 0 },
                {
                  opacity: 0,
                  y: 50,
                  duration: 1,
                  stagger: 0.2,
                  ease: "power2.out",
                }
              ),
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="experience"
      className="relative pl-4 pt-0  before:absolute before:left-2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300"
    >
      {experiences.map((exp, index) => (
        <div
          className="timeline-item relative mb-8 flex items-start"
          key={index}
        >
          <div className="absolute xl:left-[-12vw] left-2 top-0 lg:right-[-8vw] text-sm text-custom-red">
            {exp.date}
          </div>
          <div className="bg-dark-gray p-4 mt-10 xl:mt-0 text-white rounded-lg shadow-md max-w-md ml-4">
            <h3 className="font-semibold text-custom-red">{exp.role}</h3>
            <h4 className="mb-2 text-custom-red">{exp.company}</h4>
            <p>{exp.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.technolgies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-custom-red px-3 py-1 rounded-md shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Timeline.defaultProps = {
  experiences: [],
};

function Experience() {
  return (
    <div
      id="experience"
      className="snap-y scrollbar-hide scroll-smooth flex flex-col items-center justify-center min-h-screen py-40 sm:px-20 bg-primary-gray"
    >
      <div className="sm:max-w-screen-lg pt-20 sm:p-4 flex flex-col justify-center sm:py-30 sm:px-10">
        <h2 className="text-2xl font-bold text-center sm:text-left sm:text-4xl sm:font-bold text-custom-red">
          Experience
        </h2>
      </div>
      <div className="mt-8">
        <Timeline experiences={experiences} />
      </div>
    </div>
  );
}

export default Experience;
