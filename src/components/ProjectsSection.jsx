import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import interactImage from '../assets/interact.jpg';
import "./ProjectsSection.css"

const ProjectsSection = () => {
  const projects = [{
    title: "Interact Family Chat App",
    category: "Mobile Application",
    highlight: "FAMILY CHATTING AND EVENTS APP",
    description: "Interact is a revolutionary mobile app designed to help families connect with other families and promote social interaction. With Interact, families can easily find and connect with other families in their local area, create events, and chat with family partners.",
    tags: ["React Native", "Hybrid Mobile App", "Android", "iOS"],
    image: interactImage
  }];

  return (
    <section className="projects-section" id="projects">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;