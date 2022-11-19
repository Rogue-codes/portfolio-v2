import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../../src/pages/Home'
import About from "../pages/about/About"
import Projects from '../pages/projects/Projects'
import Contact from '../pages/Contact'
import {AnimatePresence} from 'framer-motion'
import ProjectDetails from "../pages/projects/ProjectDetails";
function Routers() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects/:name" element={<ProjectDetails/>} />
      </Routes>
    </AnimatePresence>
  );
}

export default Routers;
