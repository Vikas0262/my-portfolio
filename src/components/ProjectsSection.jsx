import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import interactImage from '../assets/interact.jpg';
import "./ProjectsSection.css"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Interact Family Chat App",
      category: "Mobile Application",
      description: "Interact is a revolutionary mobile app designed to help families connect with other families and promote social interaction. With Interact, families can easily find and connect with other families in their local area, create events, and chat with family partners.",
      tags: ["React Native", "Hybrid Mobile App", "Android", "iOS"],
      image: interactImage
    },
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A scalable e-commerce platform that allows users to browse, add to cart, and purchase products seamlessly. It provides a responsive UI and integrated payment gateway.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: interactImage
    },
    {
      title: "Portfolio Website",
      category: "Personal Project",
      description: "A sleek portfolio website to showcase personal projects and achievements. Built using modern web technologies with an interactive UI.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      image: interactImage
    }
  ];

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
        {projects.map((project, index) => (
          <div key={project.title} className={index % 2 === 0 ? 'left-layout' : 'right-layout'}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;