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

const Contact = () => {





  return (
    <div>
      <NavigationBar />
    
      <div className="homepage">
        {/* Left Side */}
        <div className="home-left">
          

          <img
            src="me.webp"
            alt="Augustine Jacob"
            style={{
              width: "40%",     // Change to desired size
              height: "auto",
              
            }}
          />
          <div className="name">Augustine Jacob</div>
         
          <div className="role"> <br/>Software Engineer / Artist</div>

          <div className="location"> Metro Detroit</div>

          
        </div>

        {/* Right Side */}
        <div className="home-right">
          <div className="Hello-title"></div>
          
          <hr />
          <div className="about-title">Contact Me</div>
          <div className="about-desc">
              Hello! I see you've taken an interest in reaching out to me. <br /> <br />
              I am most available to respond via my email at <b>AugustineJacobCareer@protonmail.com </b><br /><br />
              Otherwise, shoot me a message on LinkedIn, I would love to chat with you connect! <br />

           
            
          </div>
          <div className="btn-group">
            <a href="mailto:AugustineJacobCareer@protonmail.com">
              <Button variant="outline-dark">Email Me</Button>
            </a>

            <Link to="/portfolio">
              <Button variant="outline-dark">
                LinkedIn 
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

export default Contact;
