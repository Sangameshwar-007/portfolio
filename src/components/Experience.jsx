import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import './Experience.css';

export default function Experience({ data }) {
  const experiences = data.experience || [];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} /> 03 / WORK EXPERIENCE
          </span>
          <h2 className="section-title">
            Industry <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development experience building production REST APIs and full-stack modules.
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>

              <div className="glass-card timeline-content">
                <div className="timeline-header">
                  <div className="timeline-role-group">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-company">{exp.company}</span>
                  </div>

                  <div className="timeline-meta">
                    <span className="meta-badge duration">
                      <Calendar size={13} /> {exp.duration}
                    </span>
                    <span className="meta-badge location">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="timeline-summary">{exp.description}</p>

                <div className="timeline-responsibilities">
                  <h4>Key Accomplishments & Deliverables:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>
                        <ChevronRight size={16} className="bullet-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-skills">
                  {exp.skillsUsed.map((skill) => (
                    <span key={skill} className="exp-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
