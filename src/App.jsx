import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';

// Component Imports - Modularized per section requirement
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  const [activeSection, setActiveSection] = useState('hero');

  // Theme Synchronizer
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Scroll Spy for Navbar Active Highlight
  useEffect(() => {
    if (loading) return;

    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="app-main-wrapper">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main>
        <Hero data={PORTFOLIO_DATA} />
        <About data={PORTFOLIO_DATA} />
        <Skills data={PORTFOLIO_DATA} />
        <Experience data={PORTFOLIO_DATA} />
        <Projects data={PORTFOLIO_DATA} />
        <Education data={PORTFOLIO_DATA} />
        <Contact data={PORTFOLIO_DATA} />
      </main>

      <Footer name={PORTFOLIO_DATA.personal.name} />
    </div>
  );
}
