import React from "react";
import { useInView } from "react-intersection-observer";
import "../style/skills.css"; 

function Skills() {
  const SkillList = ({ title, items, delay = 0 }) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.15,
    });

    return (
      <div
        ref={ref}
        className="skill-box"
        style={{
          transform: inView ? "translateX(0)" : "translateX(-100px)",
          opacity: inView ? 1 : 0,
          transition: `all 0.9s ease-out ${delay}s`,
        }}
      >
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="skills" id="skills">
      <h1>Skills</h1>

      {/* Front */}
      <div className="skills-section">
        <h2 className="front">Front-End</h2>

        <div className="skills-group">
          <p>HTML & CSS </p>
          <SkillList
            items={[
            "⭐⭐⭐⭐☆",
              "웹 표준과 접근성을 고려한 시맨틱 마크업",
              "미디어쿼리 기반 반응형 웹 구현",
              "@keyframes를 이용한 애니메이션",
              "CSS 변수와 flex/grid를 활용한 레이아웃",
            ]}
            delay={0.2}
          />
        </div>

        <div className="skills-group">
          <p>JavaScript</p>
          <SkillList
            items={[
                "⭐⭐☆",
              "ES6+ 문법과 비동기 처리 이해",
              "DOM 조작 및 이벤트 핸들링",
              "Axios / Fetch API 통신 구현",
            ]}
            delay={0.4}
          />
        </div>

        <div className="skills-group">
          <p>React</p>
          <SkillList
            items={[
                "⭐⭐",
              "컴포넌트 기반 SPA 구조 설계",
              "React Router, Axios, useState/useEffect 활용",
              "GitHub Pages, Vercel 등 배포 경험",
            ]}
            delay={0.6}
          />
        </div>
        <div className="skills-group">
          <p>php</p>
          <SkillList
            items={[
                "⭐⭐⭐☆",
              "간단한 서버사이드 렌더링",
              "폼 처리 및 데이터전송 구현 경험",
              
            ]}
            delay={0.7}

        
          />
          </div>
      </div>

      {/* Back */}
      <div className="skills-section">
        <h2 className="back">Back-End</h2>

        <div className="skills-group">
          <p>Node.js & Express</p>
          <SkillList
            items={[
                "⭐☆",
              "RESTful API 설계 및 JWT 인증",
              "Sequelize ORM으로 MySQL 연동",
              "Render를 통한 서버 배포 경험",
            ]}
            delay={0.2}
          />
        </div>
          <div className="skills-group">
          <p>JAVA/Spring-Boot</p>
          <SkillList
            items={[
                "⭐⭐⭐☆",
              "기본 문법 및 객체지향 개념 이해,",
              "Spring 구조 학습",
            ]}
            delay={0.4}
          />
        </div>      
        <div className="skills-group">
          <p>MySQL</p>
          <SkillList
            items={[
                "⭐⭐⭐☆",
              "MySQL 스키마 설계 및 CRUD 구현",
              "Railway 클라우드 DB 연결",
            ]}
            delay={0.5}
          />
        </div>
        <div className="skills-group">
          <p>Python</p>
          <SkillList
            items={[
                "⭐⭐⭐⭐☆",
              "디스코드 봇 제작 및 비동기(Asyncio) 기반 이벤트 처리 경험",
              "Raspberry Pi로 디스코드봇 서버 구동",
              
            ]}
            delay={0.5}
          />
        </div>
      </div>

      {/* Tool */}
      <div className="skills-section">
        <h2 className="tool">Tool</h2>

        <div className="skills-group">
          <p>Git / GitHub</p>
          <SkillList
            items={[
              "버전 관리 및 원격 저장소 협업 경험",
              "깃 커밋, 브랜치 전략, Conflict 해결 경험",
            ]}
            delay={0.2}
          />
        </div>

        <div className="skills-group">
          <p>Design</p>
          <SkillList
            items={[
              "Figma로 프로토타입 / 와이어프레임 제작",
              "Photoshop, Illustrator 기본 편집 능력",
              "Vite",
              "Render",
              "Railway",
              "GitHubPages",
            ]}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
