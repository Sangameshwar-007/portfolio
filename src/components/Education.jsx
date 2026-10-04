import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import './Education.css';

export default function Education({ data }) {
  const education = data.education || [];
  const certs = data.certifications || [];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} /> 05 / EDUCATION & CERTIFICATIONS
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background & Credentials</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering degree background paired with industry technical certifications.
          </p>
        </div>

        <div className="education-layout">
          {/* Degrees Timeline */}
          <div className="education-column">
            <h3 className="column-title">
              <GraduationCap size={20} className="column-icon" /> Degrees & Qualifications
            </h3>
            
            <div className="edu-cards-list">
              {education.map((edu) => (
                <div key={edu.id} className="glass-card edu-card">
                  <div className="edu-card-header">
                    <div>
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <span className="edu-institution">{edu.institution}</span>
                    </div>
                    <span className="edu-period-badge">
                      <Calendar size={12} /> {edu.period}
                    </span>
                  </div>

                  <div className="edu-details-row">
                    <span className="edu-location"><MapPin size={12} /> {edu.location}</span>
                    {edu.grade && <span className="edu-grade">{edu.grade}</span>}
                  </div>

                  <p className="edu-description">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="education-column">
            <h3 className="column-title">
              <Award size={20} className="column-icon" /> Certifications & Achievements
            </h3>

            <div className="certs-cards-list">
              {certs.map((cert) => (
                <div key={cert.id} className="glass-card cert-card">
                  <div className="cert-icon-wrapper">
                    <Award size={24} />
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer} • {cert.date}</span>
                  </div>
                  {cert.link && cert.link !== '#' && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-link" 
                      title="Verify Certificate"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              ))}

              {/* Learning / Professional Readiness Card */}
              <div className="glass-card readiness-card">
                <div className="readiness-header">
                  <CheckCircle size={20} className="readiness-icon" />
                  <h4>Ready for Production Contributions</h4>
                </div>
                <p>
                  Equipped with foundational software engineering methodology, agile project delivery principles, clean coding standards, and proactive problem solving.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
