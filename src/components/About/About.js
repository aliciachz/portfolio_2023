import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Home2 from "../Home/Home2";
import Certification from "./Certification";

function About() {
  return (
    <Container fluid className="about-section">
      <Home2 />
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}} className="mouse-lg">
              CERTIFICATION
            </h1>
            <Certification />
          </Col>

        </Row>
        <h1 className="project-heading mouse-lg">
          Professional <strong className="purple mouse-lg">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading mouse-lg">
          <strong className="purple mouse-lg">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
