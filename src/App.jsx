import { useState } from "react";
import "./App.css";

import Hearder from "./components/Header/Hearder";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Experience from "./components/Experiance/Experience";

function App() {
  return (
    <>
      <div className="over-x-hidden">
        <Hearder />
        {/* test */}
        <div className=" overflow-x-hidden">
          {" "}
          <Home />
        </div>
        <About />
        <div className="mb-2 overflow-x-hidden">
          {" "}
          <Skills />
        </div>{" "}
        <div className="pb-20 overflow-x-hidden">
          <Experience />
        </div>
        <div className=" overflow-x-hidden">
          <Projects />
        </div>{" "}
        <div className=" overflow-x-hidden">
          <Contact />
        </div>
        <User />
      </div>
    </>
  );
}

export default App;
