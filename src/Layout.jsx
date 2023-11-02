import React from 'react'
import Hearder from './components/Header/Hearder'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'

function Layout() {
  return (
    <>
      <Hearder/>
      
      <Outlet/>
      <Footer/>
   
      
    </>
  )
}

export default Layout
