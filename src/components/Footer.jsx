import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Alexander Braff. All rights reserved.</p>
      <ul className="social-links">
        <li>
          <a href="https://github.com/awb2987" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/alexander-w-braff-36a5051a2/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://instagram.com/mercimiku/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
