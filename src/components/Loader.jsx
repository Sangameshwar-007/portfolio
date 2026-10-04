import React, { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onComplete }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${hiding ? 'fade-out' : ''}`}>
      <div className="loader-box">
        <div className="loader-ring">
          <span className="loader-initials">SK</span>
        </div>
        <div className="loader-text">INITIALIZING PORTFOLIO...</div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}
