import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Hearder";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experiance/Experience";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Main Container */}
      <div className="relative">
        {/* Header */}
        <Header theme={theme} toggleTheme={toggleTheme} />

        {/* Main Content */}
        <main className="relative">
          {/* Home Section */}
          <section id="home">
            <div className="w-full">
              <Home />
            </div>
          </section>

          {/* About Section */}
          <section id="about">
            <div className="w-full">
              <About />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills">
            <div className="w-full">
              <Skills />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience">
            <div className="w-full">
              <Experience />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <div className="w-full">
              <Projects />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <div className="w-full">
              <Contact />
            </div>
          </section>
        </main>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-custom-red text-white rounded-full shadow-lg hover:bg-custom-red/90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-custom-red focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
