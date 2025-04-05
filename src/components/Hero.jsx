import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaDownload,
  FaArrowRight,
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";
import "./Hero.css";
import profile from "../assets/profile3.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textArray = ["Code for Web", "Design UI/UX", "Build Solutions"];
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    typeText();
  }, []);

  const typeText = () => {
    let currentText = "";
    let currentIndex = 0;
    const text = textArray[currentTextIndex];

    const typing = setInterval(() => {
      if (currentIndex < text.length) {
        currentText += text[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setShowArrow(true);
          setTimeout(() => {
            setTypedText("");
            setShowArrow(false);
            setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
            typeText();
          }, 2000);
        }, 1000);
      }
    }, 100);
  };

  const handleDownload = () => {
    // Add your resume download logic here
    console.log("Downloading resume...");
  };

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`} id="home">
      <div className="animated-background"></div>
      <div className="hero-particles"></div>
      
      {/* Left Side Content */}
      <div className="hero-content">
        <div className="intro-badge animate-slide-down">
          <span className="wave">👋</span> Welcome to my Portfolio
        </div>
        {/* <h2 className="animate-slide-down">Hey! It's me</h2> */}
        <h1 className="animate-slide-up">
          <span className="gradient-text animate-gradient">Vikas</span> 
          <span className="animate-slide-right">Vishwakarma</span>
        </h1>
        <h3 className="animate-fade-in">
          I <span className="typing-text">{typedText}</span>
          {/* {showArrow && <FaArrowRight className="arrow-icon animate-bounce" />} */}
        </h3>
        <p className="animate-fade-in-up">
          I enjoy creating engaging web UI and collaborating to develop
          innovative products. Let's build something amazing together!
        </p>

        {/* Resume Button */}
        <div className="buttons animate-slide-up">
          <button className="btn glow-effect" onClick={handleDownload}>
            <FaDownload className="btn-icon" /> 
            <span className="btn-text">Download Resume</span>
            <div className="btn-particles"></div>
          </button>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="animate-pop">
            <FaLinkedin className="icon linkedin" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="animate-pop delay-1">
            <FaGithub className="icon github" />
          </a>
          <a href="#portfolio" aria-label="Portfolio" className="animate-pop delay-2">
            <FaCode className="icon portfolio" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="animate-pop delay-3">
            <FaInstagram className="icon instagram" />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email" className="animate-pop delay-4">
            <FaEnvelope className="icon email" />
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="animate-pop delay-5">
            <FaWhatsapp className="icon whatsapp" />
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="image-container animate-fade-in">
        <div className="background-shape"></div>
        <div className="orbit-circle"></div>
        <div className="floating-particles"></div>
        <div className="image-frame">
          <img 
            src={profile} 
            alt="Vikas Vishwakarma" 
            className="profile-image"
            loading="eager"
          />
          </div>
      </div>
    </section>
  );
};

export default Hero;