import React from "react";
import "./componentCSS/HomePage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationBar from "./NavBar";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const HomePage = () => {





  return (
    <div>
      <NavigationBar />
    
      <div className="homepage">
        {/* Left Side */}
        <div className="home-left">
          

          <img
            src="pfptest.png"
            alt="Augustine Jacob"
            style={{
              width: "50%",     // Change to desired size
              height: "auto",
              
            }}
          />
          <div className="name">Augustine Jacob</div>
         
          <div className="role"> <br/>Software Engineer / Artist</div>

          <div className="location"> Metro Detroit</div>

          
        </div>

        {/* Right Side */}
        <div className="home-right">
          <div className="Hello-title">Hello</div>
          
          <hr />
          <div className="about-title">A Bit About Me</div>
          <div className="about-desc">
              
            Wayne State University alumni with a B.E. in Computer Science. <br /> <br />
            In my free time, I enjoy making things with my two hands. <br />
            Whether that's painting, photography, software projects, or growing jalapenos. <br /><br />
            I believe in the concept of "use it or lose it". Software engineering is a lifelong pursuit of knowledge. <br />
            When you stop learning, you start losing what you already have. <br />
            I am currently studying for the Comptia Network+ cert, working on this website, or learning game development.<br />
            I'm always open to discussing my projects or an opportunity to work with you.<br /><br />
            Feel free to reach out!
            
          </div>
          <div className="btn-group">
            <Link to="/portfolio">
              <Button variant="outline-dark">
                Portfolio
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline-dark">
                Projects
              </Button>
            </Link>
            
            
          </div>
          

          <div className="social-icons">
            <a href="https://www.instagram.com/kals_polaroids/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/augustinekaljacob/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Aujacob?tab=repositories" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
