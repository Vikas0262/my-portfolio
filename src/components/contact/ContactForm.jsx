import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowThankYou(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-form-container">
      <div className="form-background"></div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-input"
          />
          <div className="input-highlight"></div>
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="form-input"
          />
          <div className="input-highlight"></div>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="form-input"
          />
          <div className="input-highlight"></div>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="form-input"
            rows="4"
          ></textarea>
          <div className="input-highlight"></div>
        </div>

        <button 
          type="submit" 
          className={`submit-button ${isSubmitting ? 'submitting' : ''} ${showThankYou ? 'success' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="loading-spinner"></div>
          ) : showThankYou ? (
            'Message Sent!'
          ) : (
            <>
              Send Message <FaPaperPlane className="send-icon" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 