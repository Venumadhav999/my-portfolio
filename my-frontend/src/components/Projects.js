import React from 'react';
import grievanceImage from '../Image/STUDENT AND STAFF GRIEVANCE.png';
import ProjectImage from '../Image/game result.png';
import Employee from '../Image/employee.png';
import '../Styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'STUDENT AND STAFF GRIEVANCE',
      description: 'This system helps Students and staff to record their complaints and solve their problems by hod and management.',
      image: grievanceImage,
      link: 'https://drive.google.com/file/d/1vY29_SjMLoeQiKS1-W6Hs7sscW4kW6kh/view?usp=drive_link'
    },
    {
      title: 'SNAKE GAME',
      description: 'The game involves a snake that moves around a board, eating apples that appear randomly. Each time the snake eats an apple, it grows longer. The game ends when the snake collides with itself or the walls.',
      image: ProjectImage,
      link: 'https://drive.google.com/file/d/1BX-xEk_OQCRE6YjhTQITvhSMBlZmkvgP/view?usp=drive_link'
    },
    {
      title: 'EMPLOYEE MANAGEMENT SYSTEM',
      description: 'The process of managing employee information within an organization. By integrating Spring Boot with ReactJS and MySQL, the system ensures a smooth and efficient workflow for administrative staff.',
      image: Employee,
      link: ''
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">View</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
