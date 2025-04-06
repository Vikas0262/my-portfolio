import React, { useState, useEffect } from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaCode, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';
import profile from '../assets/profile3.jpeg';

const HeroSection = ({ handleDownload }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textArray = ["Code for Web", "Design UI/UX", "Build Solutions"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const textInterval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => 
          (prevIndex + 1) % textArray.length
        );
        setAnimate(false);
      }, 500);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`}>
      {/* Left Content */}
      <div className="hero-content">
        <div className="intro-badge">
          <span className="wave">👋</span> Welcome to my Portfolio
        </div>

        <h1 className="name-heading">
          <span className="name">Vikas</span>
          <span className="lname">Vishwakarma</span>
        </h1>

        <h3 className={`profession ${animate ? 'fade-out' : 'fade-in'}`}>
          I {textArray[currentTextIndex]}
        </h3>

        <p className="description">
          I create digital experiences that are beautiful, functional, and user-focused.
          Let's build something amazing together!
        </p>

        <div className="buttons">
          <button className="btn primary-btn" onClick={handleDownload}>
            <FaDownload className="btn-icon" />
            <span className="btn-text">Download Resume</span>
          </button>
          <a href="#projects" className="btn secondary-btn">
            View Projects
          </a>
        </div>

        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="#portfolio">
            <FaCode className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="mailto:contact@example.com">
            <FaEnvelope className="icon" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>

      {/* Right Image - Simplified */}
      <div className="image-container">
        <img 
          src={profile}
          alt="Vikas Vishwakarma" 
          className="profile-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;