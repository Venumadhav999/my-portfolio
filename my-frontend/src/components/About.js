import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row">
          <div className="about-content">
            <div className="left-side">
              <h3>I'm Vℯ𝓃𝓊 M𝒶𝒹𝒽𝒶𝓋, a Web Developer</h3>
              <p>
               <li>Recently graduated with a Bachelor's Degree in Computer Science Engineering.
                I have built a solid foundation in software development, particularly in areas such as Java, MySQL, Spring Boot, Microservices, React.js, and GitHub.</li><br />
                <li>My expertise in these areas allows me to approach projects with confidence and deliver high-quality results.
                I have a strong belief in the value of continuous learning and staying adaptable in the ever-evolving world of software engineering.</li><br />
                <li>I actively seek out opportunities to expand my knowledge and skills, embracing new technologies and approaches.
                Feel free to explore my work and get in touch if you have any questions or opportunities to collaborate.</li>
              </p>
            </div>
            <div className="right-side-end">
              <ul>
                <li><strong>Full Name:</strong> DACHEPALLI VENU MADHAV</li>
                <li>---------------------------------------------------------</li>
                <li><strong>Age:</strong> 22</li>
                <li>---------------------------------------------------------</li>
                <li><strong>Nationality:</strong> INDIA</li>
                <li>---------------------------------------------------------</li>
                <li><strong>Email:</strong> venu143madhav.d@gmail.com</li>
                <li>---------------------------------------------------------</li>
                <li><strong>Availability:</strong> Fulltime</li>
                <li>---------------------------------------------------------</li>
                <li><strong>Experience:</strong> &lt; 1 year</li>
              </ul>
              <a href="https://drive.google.com/file/d/1T3aPVd3xDA77EaIdtPOeRfJOO6NXk96Y/view?usp=drive_link" className="btn" download>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
