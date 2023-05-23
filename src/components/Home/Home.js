import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/main.png";
import Particle from "../Particle";
import Type from "./Type";
import Video from "../Projects/Video";
import davich from '../../Assets/video/davich_screen_record.mp4';
import samsung from '../../Assets/video/samsung_screen_record.mp4';
import cjone from '../../Assets/video/cj_one_screen_record.mp4';
import css from '../../Assets/video/css_record.mp4';
import netflix from '../../Assets/video/netflix_screen_record.mp4';
import chatting from '../../Assets/video/chatting_record.mp4';
import homeVideo from "../../Assets/home-video.mp4";
import { Link } from 'react-router-dom';

function Home() {
  const videos = [
    { src: davich, name: 'Davich Screen Record', type: 'Davich', title: 'Screen Record', slug: 'Davich' },
    { src: samsung, name: 'Samsung Screen Record', type: 'Samsung_Electro_Mechanics', title: 'Screen Record', slug: 'Samsung' },
    { src: cjone, name: 'CJ One Screen Record', type: 'CJ_One', title: 'Screen Record', slug: 'cjone' },
    { src: netflix, name: 'Netflix Screen Record', type: 'Netflix_Korea', title: 'Screen Record', slug: 'Netflix' },
    { src: css, name: 'CSS Record', type: 'Pure CSS', title: 'Record', slug: 'css' },
    { src: chatting, name: 'Chatting Record', type: 'Chatting App', title: 'Record', slug: 'Chatting app' },
  ];

  const mainBackground = {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "10%",
    height: "50%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-2",
    opacity: "0.5"
  };

  const projectVideo = {
    cursor: "pointer"
  }

  return (
      <Container fluid className="home-section mouse-lg" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <video autoPlay loop muted style={mainBackground} className="mouse-lg">
                <source src={homeVideo} type="video/mp4" />
              </video>
              <h1 style={{ paddingBottom: 15 }} className="heading mouse-md">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name mouse-lg"> ALICIA CHANG</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid home-logo mouse-md"
              style={{ maxHeight: "450px" }}
            />
            </Col>
          </Row>
        </Container>

        <Row>
        <Particle />
          <h1 className="project-heading mouse-md">
            My Recent <strong className="purple mouse-lg">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <div className="horizontal-scroll">
          {videos.map((video, index) => (
              <article key={index} className="project-cover">
                <div className="title-bar row justify-content-between align-items-end mb-3 flex-nowrap">
                  <div className="col-auto">
                    <h2 className="lead pb-1 pe-3 d-inline-block mb-0 ps-4 ps-0" style={{color: "#F2F2F2"}}>{index+1}.</h2>
                    <div className="d-inline-block">
                      <h2 className="project-cover__title mb-0 purple mouse-md" style={{color: "#F2F2F2"}}>{video.type}</h2>
                    </div>
                  </div>
                </div>
                <Link to={`/portfolio/${video.slug}`}>
                  <div className="project-cover__video-container">
                    <i className="fa-sharp fa-regular fa-arrow-up-right fa-3x open-arrow"></i>
                    <Video videoSrc={video.src} style={projectVideo}/>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Row>
      </Container>
  );
}

export default Home;
