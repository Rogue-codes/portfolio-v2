import { motion } from 'framer-motion'
import React from 'react'
import AboutSection from '../../components/aboutSection/AboutSection'
import ContactSection from '../../components/contactSection/ContactSection'
import Landing from '../../components/Landing/Landing'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import SoldOut from '../../components/soldOut/SoldOut'

function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{x:"-100vw"}} transition={{delay:0.5, duration: 1 }}>
        <Landing/>
        <AboutSection/>
        <ProjectSection/>
        <SoldOut/>
        <ContactSection/>
    </motion.div>
  )
}

export default Home