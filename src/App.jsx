import { React, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css'

import Navbar from './Pages/Navbar'
import Project from './Pages/ProjectPage'
import HomePage from './Pages/HomePage'
import Contact from './Pages/ContactPage'
import AboutMe from './Pages/AboutPage'

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <Navbar />
      <AnimatePresence >
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