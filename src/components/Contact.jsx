import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import './Contact.css';

export default function Contact({ data }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const personal = data.personal;

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink, '_blank');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={14} /> 06 / GET IN TOUCH
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            I am currently open to full-time roles, software developer positions, and internships. Feel free to reach out via email or phone!
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Direct Contact Info Cards */}
          <div className="contact-info-column">
            
            <div className="glass-card contact-item-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email Address</span>
                <a href={`mailto:${personal.email}`} className="contact-value">{personal.email}</a>
              </div>
              <button 
                className="copy-btn" 
                onClick={() => copyToClipboard(personal.email, 'email')}
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check size={16} className="check-green" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="glass-card contact-item-card">
              <div className="contact-icon-box">
                <Phone size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Phone / WhatsApp</span>
                <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="contact-value">{personal.phone}</a>
              </div>
              <button 
                className="copy-btn" 
                onClick={() => copyToClipboard(personal.phone, 'phone')}
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check size={16} className="check-green" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="glass-card contact-item-card">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">{personal.location}</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="social-links-card glass-card">
              <h4>Connect on Professional Networks</h4>
              <div className="social-buttons-row">
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary flex-1"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn Profile</span>
                </a>

                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary flex-1"
                >
                  <GithubIcon size={18} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Quick Contact Form */}
          <div className="glass-card contact-form-card">
            <h3>Send Me a Direct Message</h3>
            
            {formSent ? (
              <div className="form-success-banner">
                <Check size={24} />
                <p>Opening your default mail client... Thank you for reaching out!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="e.g. John Doe / Recruiter Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="e.g. Job Opportunity / Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    placeholder="Hi Sangameshwar, I came across your portfolio and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <span>Send Email</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
