import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my resume: 
        <a href="/path/to/your-resume.pdf" target="_blank" rel="noopener noreferrer">
          Click here
        </a>
      </p>
      <h3>Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>Git & GitHub</li>
        <li>RESTful APIs</li>
        <li>Responsive Design</li>
      </ul>
    </section>
  );
};

export default Resume;
