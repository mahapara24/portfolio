import React from "react";
import Hearder from "./components/Header/Hearder";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experiance/Experience";
import Certification from "./components/Certification/Certification";

function Layout() {
  return (
    <div className="overflow-x-hidden">
      <Hearder />
      <div className="py-0">
        {" "}
        <Home />
      </div>

      <About />
      <div className="py-0">
        <Skills />
      </div>

      <div className="">
        <Experience />
      </div>
      <div className="py-0">
        <Certification />
      </div>
      <Projects />
      <div className="">
        {" "}
        <Contact />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
