import React from 'react';

const projects = [
  {
    title: 'Project One',
    image: '/path/to/image1.jpg',
    deployedLink: 'https://example.com',
    githubLink: 'https://github.com/awb2987/stock-up',
  },
  {
    title: 'Project Two',
    image: '/path/to/image2.jpg',
    deployedLink: 'https://example2.com',
    githubLink: 'https://github.com/awb2987/cat-app',
  },
  {
    title: 'Project Three',
    image: '/path/to/image3.jpg',
    deployedLink: 'https://example3.com',
    githubLink: 'https://github.com/awb2987/plan-4-it',
  },
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
