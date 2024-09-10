import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ctb from "../../Assets/Projects/CodeTimeBank.png";
import tpp from "../../Assets/Projects/TPP_SS2.png";
import qoca from "../../Assets/Projects/QOCA_SS1.png"

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qoca}
              isBlog={false}
              title="Quick Organic Certification Assistant"
              description="A comprehensive application designed for the certification of organic farms, streamlining the certification process for organic farmers"
              demoLink="https://app.transition.quickorganics.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ctb}
              isBlog={false}
              title="Code TimeBank"
              description="A dynamic social netwroking platform connecting developer of various experience level. A question and answer forum with dynamic profile populated by user GitHub Information."
              ghLink="https://github.com/armjim14/CodeTimebank"
              demoLink="https://code-timebank.herokuapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tpp}
              isBlog={false}
              title="Transitional Production Plan"
              description="A lightweight version of QOCA endorsed by the FDA. Designed as a lite-version certification assistant."
              demoLink="https://www.tpp.quickorganics.com/login"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
