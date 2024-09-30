import React from 'react';
import Project from './Project'; // Import the Project component

const Portfolio = () => {
  const projectData = [
    {
      title: 'Project 1',
      image: 'link-to-image-1.jpg', // Replace with actual image links
      deployedLink: 'https://example.com/deployed1',
      githubLink: 'https://github.com/username/repo1',
    },
    {
      title: 'Project 2',
      image: 'link-to-image-2.jpg', // Replace with actual image links
      deployedLink: 'https://example.com/deployed2',
      githubLink: 'https://github.com/username/repo2',
    },
    {
      title: 'Project 3',
      image: 'link-to-image-3.jpg', // Replace with actual image links
      deployedLink: 'https://example.com/deployed3',
      githubLink: 'https://github.com/username/repo3',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>My Portfolio</h2>
      <div className="portfolio-container">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
