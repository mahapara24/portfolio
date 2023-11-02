// import React from "react";
// import html from "..//../assets/html.png";
// import css from "..//../assets/css.png";
// import tailwind from "..//../assets/tailwind.png";
// import js from "..//../assets/js.png";
// import react from "..//../assets/reactjs.png";
// import node from "..//../assets/node.png";
// import github from "..//../assets/github.png";

// const Skills = () => {
//   const techs = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-100",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shawdow-blue-100",
//     },
//     {
//       id: 3,
//       src: tailwind,
//       title: "Tailwind CSS",
//       style: "shadow-blue-100 ",
//     },
//     {
//       id: 4,
//       src: js,
//       title: "JavaScript",
//       style: "shadow-yellow-100",
//     },
//     {
//       id: 5,
//       src: react,
//       title: "ReactJS",
//       style: "shawdow-blue-100",
//     },
//     {
//       id: 6,
//       src: node,
//       title: "NodeJS",
//       style: "shawdow-green-100",
//     },
//     {
//       id: 7,
//       src: github,
//       title: "GitHub",
//       style: "shawdow-white-100",
//     },
//   ];

//   return (
//     <div className='h-screen justify-start align-bottom 
//     leading-snug
//          bg-primary-gray text-white text-7xl '>
//       <div className="max-w-screen-lg mx-auto p-8  py-24 flex flex-col justify-center ">
//         <div>
//           <h2 className='leading-loose text-5xl text-custom-red font-bold'>Skills</h2>
//           <p className=" text-white text-2xl pb-14">
//             These are the technologies I've worked with
//           </p>
//         </div>

//         <div className="w-full grid grid-cols-4 justify-between gap-x-0.5 mx-19 sm:grid-col-1 gap-8 text-clip py-8 px-12 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg`}
//             >
//               <img className="h-28 w-38 mx-auto " src={ src } alt="" />
//               <p className="text-white text-xl mt-4 text-center">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import html from "..//../assets/html.png";
import css from "..//../assets/css.png";
import tailwind from "..//../assets/tailwind.png";
import js from "..//../assets/js.png";
import react from "..//../assets/reactjs.png";
import node from "..//../assets/node.png";
import github from "..//../assets/github.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-100",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shawdow-blue-100",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-blue-100",
    },
    {
      id: 4,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-100",
    },
    {
      id: 5,
      src: react,
      title: "ReactJS",
      style: "shawdow-blue-100",
    },
    {
      id: 6,
      src: node,
      title: "NodeJS",
      style: "shawdow-green-100",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shawdow-white-100",
    },
  ];

  return (
    <div className="h-full max-h-screen py-20 overflow-y-auto bg-primary-gray  text-white  sm:pt-40 sm:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 py-8">
        <div>
          <h2 className="text-4xl font-semibold text-custom-red sm:text-4xl sm:font-bold">Skills</h2>
          <p className="text-xl py-4 sm:text-2xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-2  items-center sm:grid-cols-2 md:grid-cols-4 gap-4">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`bg-dark-gray rounded-lg shadow-md hover:scale-105 duration-500 py-2`}  
            >
              <img className="h-28 w-38 mx-auto" src={src} alt="" />
              <p className="text-xl mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

