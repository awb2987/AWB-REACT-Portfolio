import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Alexander Braff</p>
      <div className="social-media-links">
        <a href="https://github.com/awb2987" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/alexander-w-braff-36a5051a2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/mercimiku/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
