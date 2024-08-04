import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';
import '../Styles/Home.css';
import Image from '../Image/image.jpg';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Full Stack Developer', 'Microservices Architect'],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="row">
          <div className="home-content">
            <div className="profile-photo">
              <img src={Image} alt="Profile" />  
            </div>
            <div className="text">
              <h1><small>Hi, I'm </small> <span style={{ fontFamily: 'cursive' }}>Venu Madhav</span></h1>
              <h2>I'm a <span ref={el}></span></h2>
              <p>Welcome to my portfolio website! I'm a passionate and aspiring software engineer with a strong desire to create innovative solutions and push the boundaries of technology. With a deep love for coding and problem-solving, I am constantly seeking opportunities to learn and grow in this ever-evolving field.</p>
              <a href="#contact" className="btn">Get In Touch</a><br />
              <div className="social-links">
                <a href="https://github.com/Venumadhav999" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/dachepalli-venu-madhav-9aa629298" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:venu143madhav@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
