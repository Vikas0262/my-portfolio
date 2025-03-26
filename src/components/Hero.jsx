import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import "./Hero.css";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Left Side Content */}
      <div className="hero-content">
        <h2>Hey! It's me</h2>
        <h1>
          <span>Vikas</span> Vishwakarma
        </h1>
        <h3>
          I <span>Code for Web</span>
        </h3>
        <p>
          I enjoy creating engaging web UI and collaborating to develop
          innovative products. Let's build something amazing together!
        </p>

        {/* Resume Button */}
        <div className="buttons">
          <button className="btn">⬇ Download Resume</button>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn"><FaLinkedin className="icon" /></a>
          <a href="#" aria-label="GitHub"><FaGithub className="icon" /></a>
          <a href="#" aria-label="Portfolio"><FaCode className="icon" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="icon" /></a>
          <a href="#" aria-label="Email"><FaEnvelope className="icon" /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp className="icon" /></a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="image-container">
        <div className="background-shape"></div>
        <img src={profile} alt="Vikas Vishwakarma" className="profile-image" />
      </div>
    </section>
  );
};

export default Hero;