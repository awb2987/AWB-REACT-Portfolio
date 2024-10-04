import React from 'react';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/assets/pdfs/resume.pdf" download className="download-link">
        Download My Resume
      </a>
      
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Git/GitHub</li>
        <li>VS Code</li>
      </ul>
    </section>
  );
};

export default Resume;
