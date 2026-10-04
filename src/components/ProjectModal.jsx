import React, { useEffect } from 'react';
import { X, ExternalLink, TrendingUp, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Banner */}
        <div className="modal-header-image">
          <img src={project.image} alt={project.title} />
          <div className="modal-header-overlay">
            <span className="modal-category-chip">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {project.metrics && (
            <div className="modal-metric-badge">
              <TrendingUp size={16} />
              <span>Key Impact: {project.metrics}</span>
            </div>
          )}

          <div className="modal-section">
            <h4>Overview & Architecture</h4>
            <p>{project.longDescription || project.description}</p>
          </div>

          <div className="modal-section">
            <h4><Layers size={16} /> Tech Stack & Tools</h4>
            <div className="modal-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="modal-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-actions">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <span>Visit Live Demo</span>
              <ExternalLink size={16} />
            </a>

            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <GithubIcon size={16} />
              <span>Source Repository</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
