import React from "react";
import "../style/project.css";
import miniLogo from "../assets/mini-logo.png";
import BBBBot from "../assets/BBBBot.png";
import logo from "../assets/logo.png"
function Project() {
  const projects = [
    {
      title: "Jinwoo Portfolio",
      type: "Personal",
      desc: "React 기반의 개인 포트폴리오 웹사이트. 반응형과 애니메이션 효과 적용",
      tech: ["React", "Vite", "CSS3"],
      img: logo,
      github: "https://github.com/92355/portpolio.git",
      demo: "https://92355.github.io/portfolio/",
    },
    {
      title: "Mini Platform",
      type: "Front-End",
      desc: "React + Node.js + MySQL 기반의 사용자 인증 및 게시글 플랫폼",
      tech: ["React", "Node.js", "Express", "MySQL", "Sequelize", "JWT"],
      img: miniLogo,
      github: "https://github.com/92355/oojinwoo-front",
      demo: "https://92355.github.io/oojinwoo-front/",
    },
    {
      title: "BBBBot",
      type: "Python",
      desc: "discord.py 기반의 비동기 디스코드 게임 봇",
      tech: ["Python", "discord.py", "asyncio", "Embed", "Heroku"],
      img: BBBBot,
      github: "https://github.com/92355/BBBBot",
      demo: "", 
    },
  ];

  return (
    <section className="project" id="project">
      <h1>Projects</h1>

      <div className="project-container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-info">
              <h2>
                {p.title} <span>{p.type}</span>
              </h2>
              <p className="desc">{p.desc}</p>
              <div className="tech-list">
                {p.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>

              <div className="project-buttons">
                
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                >
                  GitHub
                </a>

               
                {p.demo && p.demo.trim() !== "" && p.demo !== "#" && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="image-wrapper">
              <img src={p.img} alt={p.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
