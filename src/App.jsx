import { useState } from 'react'
import './App.css'
import Hearder from './components/Header/Hearder'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact'
import User from './components/User/User'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      <Hearder />
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <User/>
    </h1>
    </>
  )
}

export default App
