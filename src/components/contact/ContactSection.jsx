import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <ContactInfo />
          <SocialLinks />
        </div>
        <ContactForm />
      </div>

      <div className="contact-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default ContactSection; 