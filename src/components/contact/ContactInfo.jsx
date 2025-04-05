import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactInfo.css';

const contactDetails = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'your.email@example.com'
  },
  {
    icon: FaPhone,
    title: 'Phone',
    value: '+91 1234567890'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Mumbai, Maharashtra, India'
  }
];

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">Let's create something amazing together!</p>
      
      <div className="contact-details">
        {contactDetails.map(({ icon: Icon, title, value }) => (
          <div key={title} className="contact-item">
            <Icon className="contact-icon" />
            <div className="contact-text">
              <h3>{title}</h3>
              <p>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo; 