import React, { useState } from 'react';
import { 
  Wrench, Code2, FileCode, Database, Coffee, Layout, Zap, Server, 
  Layers, ShieldCheck, Cpu, Atom, Flame, Box, Smartphone, 
  HardDrive, GitBranch, Send, BookOpen, CheckCircle2 
} from 'lucide-react';
import './Skills.css';

export default function Skills({ data }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const skillsData = data.skills;
  const categories = ['All', ...Object.keys(skillsData)];

  // Helper map for lucide icons
  const iconMap = {
    Code2: <Code2 size={20} />,
    FileCode: <FileCode size={20} />,
    Database: <Database size={20} />,
    Coffee: <Coffee size={20} />,
    Layout: <Layout size={20} />,
    Zap: <Zap size={20} />,
    Server: <Server size={20} />,
    Layers: <Layers size={20} />,
    ShieldCheck: <ShieldCheck size={20} />,
    Cpu: <Cpu size={20} />,
    Atom: <Atom size={20} />,
    Flame: <Flame size={20} />,
    Box: <Box size={20} />,
    Smartphone: <Smartphone size={20} />,
    HardDrive: <HardDrive size={20} />,
    GitBranch: <GitBranch size={20} />,
    Send: <Send size={20} />,
    BookOpen: <BookOpen size={20} />
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} /> 02 / TECHNICAL SKILLS
          </span>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Tools I Command</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive inventory of my technical proficiencies, frameworks, database systems, and development tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`skills-tab-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Display Grid */}
        <div className="skills-categories-grid">
          {Object.entries(skillsData)
            .filter(([category]) => activeCategory === 'All' || activeCategory === category)
            .map(([category, skillList]) => (
              <div key={category} className="glass-card skill-category-card">
                <h3 className="category-title">
                  <CheckCircle2 size={18} className="category-title-icon" />
                  {category}
                </h3>
                
                <div className="skills-list">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-item-header">
                        <div className="skill-item-name">
                          <span className="skill-icon">{iconMap[skill.icon] || <Code2 size={20} />}</span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="skill-level-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress-track">
                        <div 
                          className="skill-progress-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
