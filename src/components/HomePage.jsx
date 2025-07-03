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
            I am a Software Engineer by day, Painter by night. <br />
    
            Graduated from Wayne State University with a B.E. in Computer Science. <br />
            In my free time, I enjoy building things with my hands. <br />
            Whether that's paintings, polaroids, or software projects. <br />
            I'm always open to discussing my projects or an opportunity to work with you.<br /> <br />
          
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
                SWE Projects
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
