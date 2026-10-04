import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Eye, TrendingUp } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects({ data }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = data.projects || [];
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} /> 04 / FEATURED PROJECTS
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Portfolio Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications showcasing full-stack capabilities, REST API architectures, and frontend integrations.
          </p>
        </div>

        {/* Project Filter Tabs */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              
              {/* Card Image Banner */}
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy" 
                />
                <div className="project-image-overlay">
                  <button 
                    className="btn btn-primary btn-sm overlay-btn"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <Eye size={16} /> Quick View
                  </button>
                </div>
                <span className="project-category-badge">{project.category}</span>
              </div>

              {/* Card Body */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.metrics && (
                    <span className="project-metric-pill">
                      <TrendingUp size={12} /> {project.metrics}
                    </span>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="project-actions">
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <Eye size={15} /> Details
                  </button>

                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>

                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm icon-only"
                    title="View Code on GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <ProjectModal 
            project={activeModalProject} 
            onClose={() => setActiveModalProject(null)} 
          />
        )}

      </div>
    </section>
  );
}
