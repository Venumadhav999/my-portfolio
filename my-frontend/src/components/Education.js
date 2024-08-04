import React from 'react';
import '../Styles/Education.css';

const Education = () => {
  return (
    <section className="education-content" id="education">
      <div className="container">
        <div className="row">
          <div className="education">
            <h3 className="title">Education</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">B.TECH(CSE)- 7.88 CGPA</h3>
                    <h4 className="timeline-title">Swarnandra College of Engineering and Technology,Narsapur</h4>
                    <h4 className="timeline-title">
                      <i className="fa fa-calendar"></i> 2020-2024
                    </h4>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title"> INTERMEDIATE- 9.45 CGPA</h3>
                    <h4 className="timeline-title">Aditya Junior College, Palakol</h4>
                    <h4 className="timeline-title">
                      <i className="fa fa-calendar"></i> 2018-2020
                    </h4>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">SSC- 8.8 GPA</h3>
                    <h4 className="timeline-title">SunShine School, palakol</h4>
                    <h4 className="timeline-title">
                      <i className="fa fa-calendar"></i> 2018
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="internship">
            <h3 className="title">Internship</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">ALL INDIA COUNCIL FOR TECHNICAL EDUCATION</h3>
                    <h4 className="timeline-title">AI-ML Virtual</h4>
                    <h4 className="timeline-title">
                      <i className="fa fa-calendar"></i>July(2023)
                    </h4>
                    <li className="timeline-text"> I was successfully completed an AI-ML virtual internship and supported by AWS Academy.During July 2023 with AICTE</li>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">TefoLOGIC</h3>
                    <h4 className="timeline-title">JAVA MICROSERVICE</h4>
                    <h4 className="timeline-title">
                      <i className="fa fa-calendar"></i> MARCH-JULY(2024)
                    </h4>
                    <li className="timeline-text">Developing web applications using Spring Boot, React JS, MySQL, and Postman in a microservices architecture. My projects included Healthcare Management, Travel Booking, Customer Relationship Management, and a Student-Staff Grievance System,Employee Management System. This experience honed my skills in full-stack development, my problem-solving abilities and teamwork skills.</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
