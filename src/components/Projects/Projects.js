import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import samsung from "../../Assets/Projects/samsung.png";
import css from "../../Assets/Projects/css.png";
import chatting from "../../Assets/Projects/chatting.png";
import davich from "../../Assets/Projects/davich.png";
import cjone from "../../Assets/Projects/cjone.png";
import reactflix from "../../Assets/Projects/reactflix.png";
import { Link } from "react-router-dom";

function Projects() {

  const projects = [
    {
      id: "davich",
      imgPath: davich,
      title: "DAVICH",
      description: "웹 콘텐츠 접근성 지침(WCAG)을 충족하여 제작된 PC, 테블릿, 모바일 들의 디바이스의 해상도에 맞는 반응형 다비치 사이트 제작",
      ghLink: "https://github.com/aliciachz/davich_site_2023",
      demoLink: "https://aliciachz.github.io/davich_site_2023/",
    },
    {
      id: "NETFLIX_KOREA",
      imgPath: reactflix,
      title: "NETFLIX_KOREA",
      description: "TMDB와 연동하여 REACT 와 FIREBASE를 사용해 영화 애플리케이션을 반응형 SPA 제작",
      ghLink: "https://github.com/aliciachz/davich_site_2023",
      demoLink: "https://aliciachz.github.io/davich_site_2023/",
    },
    {
      id: "CHATTING APP",
      imgPath: chatting,
      title: "CHATTING APP",
      description: "React 와 Firebase를 사용해 간단한 CRUD 가 가능한 채팅 애플리케이션 SPA 제작",
      ghLink: "https://github.com/aliciachz/reactchat_app_2023",
      demoLink: "https://aliciachz.github.io/reactchat_app_2023/",
    },
    {
      id: "samsung",
      imgPath: samsung,
      title: "SAMSUNG ELECTRO",
      description: "웹 콘텐츠 접근성 지침(WCAG)을 충족하여 삼성전기 웹사이트를 제작",
      ghLink: "https://github.com/aliciachz/samsung_site_2023",
      demoLink: "https://aliciachz.github.io/samsung_site_2023/",
    },
    {
      id: "cjone",
      imgPath: cjone,
      title: "CJ_ONE",
      description: "웹 콘텐츠 접근성 지침(WCAG)을 충족하여 제작된 PC, 테블릿, 모바일 들의 디바이스의 해상도에 맞는 반응형 CJ_ONE 사이트 제작",
      ghLink: "https://github.com/aliciachz/CJ_ONE_site_2023",
      demoLink: "https://aliciachz.github.io/CJ_ONE_site_2023/",
    },
    {
      id: "css",
      imgPath: css,
      title: "PURE CSS",
      description: "HTML과 CSS만을 사용하여 역동적인 자화상을 구현 / 엄격한 색상 팔레트를 고수하고 원래 디자인 원칙을 고수하면 서 픽셀 완벽한 페이스북 이모지를 구현",
      ghLink: "https://github.com/aliciachz/CSS_self-portrait",
      demoLink: "https://aliciachz.github.io/CSS_self-portrait/",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading mouse-md">
          My Recent <strong className="purple mouse-lg">Works </strong>
        </h1>
        <p style={{ color: "white" }} className="mouse-md">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <Link to={`/project/${project.id}`} className="no-underline">
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
