import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';
import { FaBrain, FaRocket, FaGraduationCap } from 'react-icons/fa';
import { FaCode } from "react-icons/fa6";
import { SiJavascript, SiReact, SiPython, SiNodedotjs  } from 'react-icons/si';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: <SiReact /> },
    { name: 'JavaScript/TypeScript', level: 85, icon: <SiJavascript /> },
    { name: 'Backend Development', level: 80, icon: <SiNodedotjs /> },
    { name: 'Python Programming', level: 75, icon: <SiPython /> },
    { name: 'AI/ML Concepts', level: 70, icon: <FaBrain /> }
  ];

  const qualifications = [
    {
      year: "2020-2021",
      icon: <FaGraduationCap />,
      title: "Senior Secondary Education",
      institution: "Daffodils Public School",
      score: "85%",
      highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      year: "2022-2026",
      icon: <FaRocket />,
      title: "B.Tech in Computer Science",
      institution: "Galgotias College of Engineering",
      specialization: "AI & ML",
      coursework: ["Deep Learning", "Neural Networks", "Data Mining", "Big Data Analytics"]
    }
  ];

  return (
    <section className="about-section" id="about">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="section-title"
      >
        &lt;CodeCrafting Journey/&gt;
      </motion.h2>

      <div className="about-container">
        {/* Left Column - Skills & Bio */}
        <motion.div 
          className="skills-column"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'spring' }}
        >
          <div className="profile-summary">
            <FaCode className="summary-icon" />
            <h3>Full-Stack Developer</h3>
            <p>3+ years crafting digital experiences</p>
            <div className="achievement-badges">
              <span>15+ Projects</span>
              <span>10K+ Lines of Code</span>
            </div>
          </div>

          <div className="skills-container">
            <h4>Technical Arsenal</h4>
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="skill-header">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
                <div className="skill-meter">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                  <span>{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="tech-cloud">
            {['React', 'Node.js', 'MongoDB', 'Python', 'TensorFlow', 'AWS', 'Docker', 'Git'].map((tech) => (
              <span key={tech} className="cloud-item">{tech}</span>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Qualifications */}
        <motion.div 
          className="qualification-column"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'spring' }}
        >
          <div className="timeline-header">
            <FaGraduationCap className="timeline-icon" />
            <h3>Academic Odyssey</h3>
          </div>

          <div className="qualification-timeline">
            {qualifications.map((item, index) => (
              <motion.div 
                key={index}
                className="timeline-card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <div className="timeline-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <div className="institution">{item.institution}</div>
                  {item.specialization && (
                    <div className="specialization">
                      <span>Specialization:</span> {item.specialization}
                    </div>
                  )}
                  <div className="achievements">
                    {item.highlights?.map((highlight, i) => (
                      <span key={i}>{highlight}</span>
                    ))}
                    {item.coursework?.map((course, i) => (
                      <span key={i}>{course}</span>
                    ))}
                  </div>
                  {item.score && <div className="score-badge">{item.score}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>  
  );
};

export default AboutSection;