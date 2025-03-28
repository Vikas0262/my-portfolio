import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import Skills from '../components/Skills.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Skills />
        <ProjectsSection />
        
    </div>
  )
}

export default Home