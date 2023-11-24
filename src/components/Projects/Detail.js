import React from 'react';
import { useParams } from 'react-router-dom';
import Video from '../Projects/Video';
import chatting from '../../Assets/video/chatting_record.mp4';
import cjone from '../../Assets/video/cj_one_screen_record.mp4';
import css from '../../Assets/video/css_record.mp4';
import netflix from '../../Assets/video/netflix_screen_record.mp4';
import samsung from '../../Assets/video/samsung_screen_record.mp4';
import davich from '../../Assets/video/davich_screen_record.mp4';
import htmllogo from '../../Assets/html_logo.png';
import csslogo from '../../Assets/css_logo.png';
import sasslogo from '../../Assets/scss_logo.png';
import jslogo from '../../Assets/js_logo.png';
import firebaselogo from '../../Assets/firebase_logo.png';
import reactlogo from '../../Assets/react_logo.png';
import jquerylogo from '../../Assets/jquery_logo.png';
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Particle from "../Particle";

function Detail() { 
  const { id } = useParams();

  const detail = [
    {
        id: "davich",
        title: "다비치안경 반응형 웹사이트",
        completed: "2023",
        overview: "웹 콘텐츠 접근성 지침(WCAG)을 충족하여 제작된 PC, 테블릿, 모바일 들의 디바이스의 해상도에 맞는 반응형 다비치 사이트 제작",
        task: ["메인: js를 사용하여 다양한 인터렉션 구현", "서브1: FORM속성을 사용하여 고객센터 페이지 구현", "서브2: TABLE 속성을 사용하여 가맹점 개설안내 페이지 구현"],
        builtby: "HTML, CSS, JS",
        ghLink: "https://github.com/aliciachz/davich_site_2023",
        demoLink: "https://aliciachz.github.io/davich_site_2023/",
    },
    {
        id: "NETFLIX_KOREA",
        title: "NETFLIX_KOREA",
        completed: "2023",
        overview: "TMDB와 연동하여 REACT 와 FIREBASE를 사용해 영화 애플리케이션을 반응형 SPA 제작",
        task: ["STYLED-COMPONENTS: 일부 컴포넌트 STYLED-COMPONENTS 를 사용해 스타일 적용", "AXIOS: AXIOS를 사용한 API호출로 데이터 전달", "(USEEFFECT/USESTATE): HOOK함수를 사용해 데이터 전달 및 관리", "FIREBASE: FIREBASE의 인증 서비스를 사용해 이메일 및 소셜 로그인 기능 구현", "SWIPER.JS: SWIPE 라이브러리로 영화 배열의 스와이프 기능을 구현", "DEBOUNCING: 검색 창에 키보드 타이핑이 끝날때 까지 기다리는 사용자 함수 생성", "반응형: 다양한 디바이스에서 최적화된 사용자 경험 제공"],
        builtby: "HTML, CSS, REACT, FIREBASE, STYLED COMPONENTS",
        ghLink: "https://github.com/aliciachz/reactflix_app_2023",
        demoLink: "https://aliciachz.github.io/reactflix_app_2023/",
    },
    {
        id: "CHATTING APP",
        title: "CHATTING APP ",
        completed: "2023",
        overview: "React 와 Firebase를 사용해 간단한 CRUD가 가능한 채팅 애플리케이션 SPA 제작",
        task: ["REACT의 데이터베이스/ 스토리지 서비스를 사용해 채팅/프로필 변경/ 사진전송 기능 구현", "FIREBASE의 인증 서비스를 사용해 이메일 및 소셜 로그인 기능 구현", "AXIOS를 사용한 API 호출로 데이터 전달", "HOOK함수 (USEEFFECT/USESTATE)를 사용해 데이터 전달 및 관리"],
        builtby: "HTML, SASS, REACT, FIREBASE, STYLED COMPONENTS",
        ghLink: "https://github.com/aliciachz/reactchat_app_2023",
        demoLink: "https://aliciachz.github.io/reactchat_app_2023/",
    },
    {
        id: "samsung",
        title: "삼성전기",
        completed: "2023",
        overview: "웹 콘텐츠 접근성 지침(WCAG)을 충족하여 삼성전기 웹사이트를 제작",  
        task: ["CSS와 JavaScript를 사용해 리뉴얼 된 삼성전기 홈페이지의 인터랙션과 디자인을 적용"],
        builtby: "HTML, CSS, JS",
        ghLink: "https://github.com/aliciachz/samsung_site_2023",
        demoLink: "https://aliciachz.github.io/samsung_site_2023/",
    },
    {
        id: "cjone",
        title: "CJ_ONE",
        completed: "2023",
        overview: "웹 콘텐츠 접근성 지침(WCAG)을 충족하여 제작된 PC, 테블릿, 모바일 들의 디바이스의 해상도에 맞는 반응형 CJ_ONE 사이트 제작",
        task: ["Challenge 1: ..."],
        builtby: "HTML, CSS, JS, JQEURY",
        ghLink: "https://github.com/aliciachz/CJ_ONE_site_2023",
        demoLink: "https://aliciachz.github.io/CJ_ONE_site_2023/",
    },
    {
        id: "css",
        title: "CSS 자화상 및 Facebook Emojis",
        completed: "2023",
        overview: ["HTML과 CSS만을 사용하여 역동적인 자화상을 구현", "엄격한 색상 팔레트를 고수하고 원래 디자인 원칙을 고수하면 서 픽셀 완벽한 페이스북 이모지를 구현"],
        task: ["정확한 색상 표현과 디자인 충실도를 갖춘 새심하게 제작된 Facebook 이모티콘"],
        builtby: "HTML, CSS",
        ghLink: "https://github.com/aliciachz/CSS_self-portrait",
        demoLink: "https://aliciachz.github.io/CSS_self-portrait/",
    },
  ];

  const projectVideos = [
    {
      id: "davich",
      src: davich
    },
    {
      id: "NETFLIX_KOREA",
      src: netflix
    },
    {
      id: "CHATTING APP",
      src: chatting
    },
    {
      id: "samsung",
      src: samsung
    },
    {
      id: "cjone",
      src: cjone
    },
    {
      id: "css",
      src: css
    }
  ];

  const projectDetail = detail.find(project => project.id === id);
  const projectVideo = projectVideos.find(video => video.id === id);

  if (!projectDetail) {
    return <div>Project not found</div>;
  }

  return (
    <div className="detail-container">
      <Particle />

      <h1 className='blind'>Project Details</h1>

      
      <div className="detail-section">
        <h2 className='blind'>Title</h2>
        <p className='purple title mouse-md'>{projectDetail.title}</p>
      </div>

      <div className="detail-section">
        <h2 className='blind'>Video</h2>
        <div className="project_video">
          <div className="video">
            <Video videoSrc={projectVideo.src} />
          </div>
        </div>
      </div>

      <div className="detail-section">
        <h2 className='blind'>Links</h2>
        <span className='space'>
        <Button variant="primary" href={projectDetail.ghLink} target="_blank">
          <BsGithub className=''/> &nbsp; GitHub
        </Button>
        </span>
        <Button variant="primary" href={projectDetail.demoLink} target="_blank">
          <CgWebsite /> &nbsp; Live Demo
        </Button>
      </div>

      <div className="detail-section">
        <h2 className='purple mouse-md'>Completed</h2>
        <p className='mouse-md'>{projectDetail.completed}</p>
      </div>

      <div className="detail-section">
        <h2 className='purple mouse-md'>Overview</h2>
        <p className='mouse-md'>{projectDetail.overview}</p>
      </div>

      <div className="detail-section">
        <h2 className='purple mouse-md'>Task</h2>
        {projectDetail.task.map((task, index) => (
        <li key={index} className="mouse-md">{task}</li>
        ))}
      </div>

      <div className="detail-section">
      <h2 className='purple mouse-md'>Built by</h2>
      <div className="technology-icons mouse-md">
        {projectDetail.builtby.split(', ').map((tech, index) => {
          switch (tech) {
            case 'HTML':
              return <img key={index} className="tech-icon" src={htmllogo} alt="HTML" />;
            case 'CSS':
              return <img key={index} className="tech-icon" src={csslogo} alt="CSS" />;
            case 'JS':
              return <img key={index} className="tech-icon" src={jslogo} alt="JS" />;
            case 'REACT':
              return <img key={index} className="tech-icon" src={reactlogo} alt="REACT" />;
            case 'FIREBASE':
              return <img key={index} className="tech-icon" src={firebaselogo} alt="FIREBASE" />;
            case 'SASS':
              return <img key={index} className="tech-icon" src={sasslogo} alt="SASS" />;
            case 'JQEURY':
              return <img key={index} className="tech-icon" src={jquerylogo} alt="JQUERY" />;
            default:
              return null;
          }
        })}
      </div>
    </div>

  </div> 
  );
}

export default Detail;
