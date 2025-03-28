import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import Skills from '../components/Skills.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import Certifications from '../components/Certifications.jsx'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Skills />
        <ProjectsSection />
        <AboutSection />
        <Certifications />
    </div>
  )
}

export default Home