import React, { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import "./componentCSS/Polaroid.css";
import { Link } from "react-router-dom";


const polaroids = [
  {
    title: "Winter Fever",
    description: "Life in motion during a busy afternoon.",
    imageUrl: "trees.png",
  },
  {
    title: "Lodge",
    description: "Golden hour captured from a downtown rooftop.",
    imageUrl: "lodge.png",
  },
  {
    title: "Date",
    description: "Candid shot from a quiet cafe in the morning.",
    imageUrl: "couple.png",
  },
  {
    title: "Abandoned Alley",
    description: "Candid shot from a quiet cafe in the morning.",
    imageUrl: "apartment.png",
  },
  // Add more as needed
];

const PolaroidGallery = () => {
  const [index, setIndex] = useState(0);
  const current = polaroids[index];

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % polaroids.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + polaroids.length) % polaroids.length);
  };

  return (
    
    <Container className="polaroid-gallery py-5 text-center">
       <Link to="/portfolio">
          <Button variant="secondary">Back to Portfolio</Button>
        </Link>
      
      <h1 className="mb-4">Polaroid Series I - Winter</h1>
      <Card className="mx-auto polaroid-card shadow-sm" style={{ maxWidth: "500px" }}>
        <Card.Img variant="top" src={current.imageUrl} className="polaroid-image" />
        <Card.Body>
          <Card.Title>{current.title}</Card.Title>
          <Card.Text>{current.description}</Card.Text>
        </Card.Body>
      </Card>
      
      <div className="mt-3">
        
        <Button variant="outline-primary" onClick={prev} className="me-2">Previous</Button>
        <Button variant="primary" onClick={next}>Next</Button>
       
      </div>
    </Container>
  );
};

export default PolaroidGallery;
