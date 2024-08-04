import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../Styles/Header.css';

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${sticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="logo">
            <a href="/"><span style={{ fontFamily: 'cursive' }}>Vℯ𝓃𝓊 M𝒶𝒹𝒽𝒶𝓋</span></a>
          </div>
          <nav className="nav-menu">
            <ul>
              <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
              <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
              <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;