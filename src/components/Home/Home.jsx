import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Home() {
  const [text] = useTypewriter({
    words: ["Mahapara", "Software Developer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 40,
  });

  return (
    <div
      id="home"
      className="h-screen overflow-x-scroll bg-primary-gray scrollbar-hide scroll-smooth sm:items-start pt-64 pl-4 sm:pl-20 sm:pt-72"
    >
      <div className="text-left sm:px-2 sm:py-16">
        <div className="text-2xl ml-4 items-left  text-white font- font-bold leading-tight sm:text-6xl">
          <h1 className="hidden sm:block" style={{ marginBottom: "20px" }}>
            Hello, I'm a {""}
            <span
              className="pb-8 mb-8 p-4"
              style={{
                paddingTop: "20rem",
                fontWeight: "bold",
                color: "#40D1FF",
                fontSize: "4rem",
              }}
            >
              <br className="sm:hidden" />
              {text}
            </span>
            <span style={{ color: "#40D1FF", marginTop: "60px" }}>
              {" "}
              <Cursor className="bg-primary-gray pt-8 -z-0" cursorStyle="<" />
            </span>
          </h1>

          <div className="text-4xl font-semibold ">
            <h1
              className="sm:hidden md:hidden text-[36px] pb-2"
              style={{ marginBottom: "20px" }}
            >
              Hello, I'm a {""}
              <div className="sm:hidden md:block pb-2 pt-2">
                <h1 className="text-[36px] py-2 mb-8 leading-snug leading-2  font-bold text-custom-red block w-8 h-10">
                  {text}
                </h1>

                <span style={{ color: "transparent" }}>
                  {" "}
                  <Cursor
                    className="bg-primary-gray "
                    Cursor="false"
                    cursorBlinking="false"
                    cursorStyle="<"
                  />
                </span>
              </div>
            </h1>
          </div>

          <div className="flex justify-between gap-8">
            <button className="px-2 py-2 shadow-glow-custom-red text-base mt-3 flex items-center font-medium text-black bg-custom-red border-2 border-custom-red rounded-md hover:bg-custom-red/90 sm:px-4 sm:py-3 sm:text-xl sm:mt-8 sm:font-semibold">
              <a
                href="MAHAPARA-SOFTWARE-DEVELOPER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Download Resume
              </a>

              <span className="ml-2">
                <BsFillPersonLinesFill className="h-4 w-4 sm:h-6 sm:w-6" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
