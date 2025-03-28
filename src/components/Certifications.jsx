import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      issuer: "Microsoft and LinkedIn",
      title: "Career Essential in Software Development",
      credentialUrl: "#"
    },
    {
      issuer: "IBM",
      title: "IBM SkillsBuild Summer Internship Program",
      credentialUrl: "#"
    },
    {
      issuer: "GitHub",
      title: "GitHub Foundations",
      credentialUrl: "#"
    },
    {
      issuer: "Accenture",
      title: "Digital Skills: Artificial Intelligence",
      credentialUrl: "#"
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        &lt;Certifications/&gt;
      </motion.h2>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <motion.div 
            key={certification.issuer}
            className="certification-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="certification-header">
              <h3 className="issuer">{certification.issuer}</h3>
              <div className="issuer-border"></div>
            </div>
            <p className="certification-title">{certification.title}</p>
            <a 
              href={certification.credentialUrl}
              className="credential-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show Credential
              <span className="button-arrow">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;