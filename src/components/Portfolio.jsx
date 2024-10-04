import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Stock-Up',
    image: '/assets/images/project1.jpg',
    deployedLink: 'https://surpritam.github.io/stock-up/',
    githubLink: 'https://github.com/awb2987/stock-up',
  },
  {
    title: 'Purr-Pal',
    image: '/assets/images/project2.jpg',
    deployedLink: 'https://catapp-pde6.onrender.com',
    githubLink: 'https://github.com/awb2987/CatApp',
  },
  {
    title: 'Plan 4 It',
    image: '/assets/images/project3.jpg',
    deployedLink: 'https://plan-4-it-1.onrender.com/',
    githubLink: 'https://github.com/awb2987/plan-4-it',
  },
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
