import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer({ name }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <div className="logo-icon small">
            <Code2 size={16} />
          </div>
          <span className="footer-logo-text">{name}</span>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {name}. Built with ReactJS & CSS.
        </p>

        <button 
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
}
