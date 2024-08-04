import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faDocker, faJava } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import '../Styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3 },
    { name: 'React JS', icon: faReact },
    { name: 'SpringBoot', icon: faJava }, 
    { name: 'MY SQL', icon: faDatabase }, 
    { name: 'Microservices', icon: faDocker },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <FontAwesomeIcon icon={skill.icon} size="3x" />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
