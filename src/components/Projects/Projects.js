import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const screenHeight = window.innerHeight || "100vh";
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <h1 style={{ height: screenHeight, color: "purple" }}>
          Projects details will be update here soon ...
        </h1>
      </Container>
    </Container>
  );
}

export default Projects;
