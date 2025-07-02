import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./componentCSS/pencil.css";
//make pencil.css




const PencilGallery = () => {
  return (
   <div >

      {/* <div className="portfolio-left d-flex flex-column justify-content-center align-items-center p-4 text-center">
        <img
          src="me_in_suit.png"
          alt="Augustine Jacob"
          style={{ maxWidth: '200px', height: 'auto' }}
        />
        
        <h1 className="portfolio-title">Augustine Jacob</h1>
        <p className="portfolio-subtitle">Artistic Portfolio</p>
        <Button href="/" className="back-button mt-2">
          Back to Home
        </Button>
      </div> */}
      <div className="right-side">


        <img
          src="trees.png"
          alt="pencil"
          style={{ maxWidth: '200px', maxHeight: '300px' }}
        />
        <h1>Title 1</h1>
        <p>lorem upsum sdjafadfkasbdkj</p>


        

      </div>
      

      




   </div>

  );
};

export default PencilGallery;
