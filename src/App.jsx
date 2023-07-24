import './App.css'
import {React, useEffect} from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './Pages/Navbar'
import Project from './Pages/ProjectPage'
import HomePage from './Pages/HomePage'
import Contact from './Pages/ContactPage'
import AboutMe from './Pages/AboutPage'
// import { useEffect, useState } from 'react'

function App() {
  // const location =  useLocation();

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0
  // })

  // const [cursorVariant, setCursorVariant] = useState("default")

  // useEffect(() => {

  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX - 7,
  //       y: e.clientY - 7,
  //     })
  //   }

  //   window.addEventListener("mousemove", mouseMove)
  
  //   return() => {
  //     window.removeEventListener("mousemove", mouseMove)
  //   }

  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x,
  //     y: mousePosition.y
  //   }
  // }

  return (
    <>
    {/* <motion.div className="cursor" variants={variants} animate={cursorVariant} /> */}
      <Navbar />
      <AnimatePresence mode='wait'>
      <ScrollToTop />
        <Routes location={location} key={location.pathname} >
          <Route index element={<HomePage />} />
          <Route path='/project' element={ <Project /> } />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
