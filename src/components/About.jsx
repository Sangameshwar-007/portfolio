import React from 'react';
import { User, ShieldCheck, Database, GitBranch, Code, Download, FileText, CheckCircle2 } from 'lucide-react';
import './About.css';

export default function About({ data }) {
  const about = data.about;

  const coreStrengths = [
    {
      title: "RESTful API Architecture",
      desc: "Experience building scalable, asynchronous web APIs using FastAPI & Pydantic validation schemas.",
      icon: <Code size={22} />
    },
    {
      title: "JWT Security & RBAC",
      desc: "Implementing secure token-based authentication and role-restricted endpoint access control.",
      icon: <ShieldCheck size={22} />
    },
    {
      title: "Database Modeling",
      desc: "Designing normalized MySQL tables, indexes, and optimized query mappings with SQLAlchemy ORM.",
      icon: <Database size={22} />
    },
    {
      title: "Agile & Team Git Workflow",
      desc: "Proficient in Git branching models, merge requests, code reviews, and GitLab collaboration.",
      icon: <GitBranch size={22} />
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <User size={14} /> 01 / ABOUT ME
          </span>
          <h2 className="section-title">
            Passionate about building <span className="gradient-text">backend solutions</span> & responsive apps.
          </h2>
        </div>

        <div className="about-grid">
          {/* Main bio glass card */}
          <div className="glass-card about-bio-card">
            <h3 className="bio-heading">{about.heading}</h3>
            <p className="bio-paragraph">{about.bio}</p>

            <div className="about-highlights-grid">
              {about.highlights.map((item, index) => (
                <div className="highlight-box" key={index}>
                  <span className="highlight-value">{item.value}</span>
                  <span className="highlight-label">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="about-cv-wrapper">
              <a 
                href={data.personal.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </a>
              <span className="location-info">📍 Based in {data.personal.location}</span>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="about-strengths-column">
            <h3 className="strengths-title">Core Engineering Strengths</h3>
            <div className="strengths-list">
              {coreStrengths.map((item, i) => (
                <div key={i} className="glass-card strength-item">
                  <div className="strength-icon">{item.icon}</div>
                  <div className="strength-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
