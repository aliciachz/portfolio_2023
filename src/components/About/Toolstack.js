import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgFigma } from "react-icons/cg";
import { FaSketch } from "react-icons/fa";
import { SiVisualstudiocode, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";

const tools = [
  <SiVisualstudiocode />,
  <SiAdobeillustrator />,
  <SiAdobephotoshop />,
  <CgFigma />,
  <FaSketch />,
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tool}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
