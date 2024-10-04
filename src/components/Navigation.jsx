import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} aria-label="About Me">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''} aria-label="Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} aria-label="Contact Me">Contact Me</Link>
        </li>
        <li>
          <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''} aria-label="Resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
