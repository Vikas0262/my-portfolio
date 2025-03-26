import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import Skills from '../components/Skills.jsx'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Skills />
    </div>
  )
}

export default Home