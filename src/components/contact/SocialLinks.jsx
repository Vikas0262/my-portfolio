import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './SocialLinks.css';

const socialLinks = [
  {
    icon: FaLinkedin,
    url: 'https://linkedin.com',
    label: 'LinkedIn Profile'
  },
  {
    icon: FaGithub,
    url: 'https://github.com',
    label: 'GitHub Profile'
  },
  {
    icon: FaWhatsapp,
    url: 'https://wa.me/your-number',
    label: 'WhatsApp Contact'
  }
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 