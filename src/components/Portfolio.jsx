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
              src="pom2.webp"
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
            <div className = "artTitle"> Polygonal Pomegranate </div>
            <Card className ="card">
              <Card.Body>
                <Card.Title></Card.Title>
                  <Card.Text>
                    Polygonal Pomegranate is an acrylic painting I've been working on for the past 6 months.
                     I started this with a strong desire to paint a pomegranate. Halfway through, somebody asked me why the pom looked like that. <br/>
                     <b>"Pomegranates aren't polygons!"</b>
                     <br/>But then I asked myself, <br/><b>"What's wrong with a Polygonal Pomegranate?" </b> <br/>
                     It's still a work in progress. The painting is finished when I feel satisfied by
                       what I see.
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
              src="gojo.webp"
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
                  <Card.Text> This piece started as a tutorial for my friends on how to draw a certain animated character, 
                    but soon I asked myself <br/><b>"what I turned it into pointallism?" </b><br/>
                    and then I spent the next few nights on this,<br/> meticulously making dots until it felt complete.
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
              src="LukeSkyWalker.webp"
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
            <div className = "artTitle">Sky Walking </div>
            <Card className ="card">
              <Card.Body>
                <Card.Title></Card.Title>
                  <Card.Text>
                    After sitting down and watching, probably the greatest sequel in American Cinema, <b>The Empire strikes Back</b>, <br/>
                    I felt inspired to paint.<br/> So I painted Luke Skywalker.
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
