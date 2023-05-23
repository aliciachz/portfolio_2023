import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiCss3, DiJqueryLogo } from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiRedux } from "react-icons/si";

const icons = [
  <AiFillHtml5 />,
  <DiCss3 />,
  <DiJavascript1 />,
  <DiNodejs />,
  <DiReact />,
  <SiNextdotjs />,
  <DiGit />,
  <SiRedux />,
  <DiJqueryLogo />,
  <SiFirebase />,
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
