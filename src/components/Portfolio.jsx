import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./componentCSS/portfolio.css";
import {Link} from "react-router-dom";
import NavigationBar from "./NavBar";


const Portfolio = () => {
  return (
    <div className="portPage">
      <NavigationBar /> 

      
      <Row>
      
        <Col md={6}>
          <div className="painting">
            <img
              src="pom2.png"
              alt="Augustine Jacob"
              style={{
                width: "80%",    
                height: "auto",
                
              }}
            />
            
          </div>


        </Col>
        <Col md={6}>
          <div className="rightside">
            <div className = "artTitle"> Polygonal Pomegranite </div>
            <Card className ="card">
              <Card.Body>
                <Card.Title></Card.Title>
                  <Card.Text>
                    This is some text inside a Bootstrap card. It appears next to the image. This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>

      </Row>





      <Row>
      
        <Col md={6}>
          <div className="painting">
            <img
              src="gojo.png"
              alt="Augustine Jacob"
              style={{
                width: "80%",    
                height: "auto",
                
              }}
            />
            
          </div>


        </Col>
        <Col md={6}>
          <div className="rightside">
            <div className = "artTitle"> Gojo </div>
            <Card className ="card">
              <Card.Body>
                <Card.Title></Card.Title>
                  <Card.Text>
                    This is some text inside a Bootstrap card. It appears next to the image. This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>

      </Row>

      
      <Row>
      
        <Col md={6}>
          <div className="painting">
            <img
              src="LukeSkyWalker.PNG"
              alt="Augustine Jacob"
              style={{
                width: "80%",    
                height: "auto",
                
              }}
            />
            
          </div>


        </Col>
        <Col md={6}>
          <div className="rightside">
            <div className = "artTitle"> Luke Skywalker </div>
            <Card className ="card">
              <Card.Body>
                <Card.Title></Card.Title>
                  <Card.Text>
                    This is some text inside a Bootstrap card. It appears next to the image. This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.This is some text inside a Bootstrap card. It appears next to the image.
                  </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>

      </Row>

    </div>

      
  );
};

export default Portfolio;
