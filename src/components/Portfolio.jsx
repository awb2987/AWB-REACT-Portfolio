import React from 'react';
import Project from '../components/Project';
import projectImage1 from '../assets/images/project1.jpg';
import projectImage2 from '../assets/images/project2.jpg';
import projectImage3 from '../assets/images/project3.jpg';

const projects = [
  {
    title: 'Stock-Up',
    image: projectImage1,
    deployedLink: 'https://surpritam.github.io/stock-up/',
    githubLink: 'https://github.com/awb2987/stock-up',
  },
  {
    title: 'Purr-Pal',
    image: projectImage2,
    deployedLink: 'https://catapp-pde6.onrender.com',
    githubLink: 'https://github.com/awb2987/CatApp',
  },
  {
    title: 'Plan 4 It',
    image: projectImage3,
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
