import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import './Hero.css';

export default function Hero({ data }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = data.roles || [];

  useEffect(() => {
    if (roles.length === 0) return;
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-glow"></div>
      <div className="container hero-container">
        
        {/* Availability Badge */}
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          <span>{data.personal.availability}</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{data.personal.name}</span>
        </h1>

        {/* Dynamic Typing Title */}
        <div className="hero-role-wrapper">
          <Terminal size={22} className="terminal-icon" />
          <span className="hero-role-text">{displayedText}</span>
          <span className="typing-cursor">|</span>
        </div>

        {/* Description Pitch */}
        <p className="hero-description">
          Specializing in building high-concurrency <strong className="highlight-text">FastAPI REST APIs</strong>, 
          robust database architectures with <strong className="highlight-text">MySQL & SQLAlchemy</strong>, 
          and dynamic <strong className="highlight-text">ReactJS</strong> frontends.
        </p>

        {/* Primary Call to Actions */}
        <div className="hero-actions">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            <span>Explore My Work</span>
            <ArrowRight size={18} />
          </button>

          <a 
            className="btn btn-secondary"
            href={`mailto:${data.personal.email}`}
          >
            <Mail size={18} />
            <span>Hire Me</span>
          </a>

          <a 
            className="btn btn-outline"
            href={data.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={18} />
            <span>LinkedIn</span>
          </a>

          <a 
            className="btn btn-secondary"
            href={data.personal.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Quick Tech Badges */}
        <div className="hero-tech-strip">
          <span className="tech-strip-label"><Sparkles size={14} /> Core Stack:</span>
          <div className="tech-tags">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">ReactJS</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">SQLAlchemy</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Git</span>
          </div>
        </div>

      </div>
    </section>
  );
}
