import { useEffect, useState } from "react";
import "../style/Hero.css";

function Hero() {
  const phrases = [
    "꾸준한 노력과 책임감 있는 태도로 성장하는 사람",
    "오늘에 안주하지 않고, 더 나은 내일을 향해 나아가는 사람",
    "기술로 더 나은 경험을 만드는 프론트엔드 엔지니어",
  ];

    const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const speed = isDeleting ? 50 : 120; // ✅ 타이핑 속도 조절 (더 천천히)
    const delay = isDeleting ? 50 : 120;

    let timer;

    if (!isDeleting && text === current) {
     
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === "") {
      
      timer = setTimeout(() => {
        setIsDeleting(false);
        setIndex((index + 1) % phrases.length);
      }, 800);
    } else {
      
      timer = setTimeout(() => {
        const newText = isDeleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(newText);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases]);


  return (
    <section id="hero">
      <h1>
        변화를 두려워하지 않고, <br />
        <span className="highlight">새로운 기술을 배우며 </span><br />
        <span className="highlight">성장하는것을 즐기는 </span><br />
        <strong>곽진우</strong>{" "}입니다.
      </h1>

      <p className="typing-text">{text}</p>

      <div className="hero-buttons">
        <a href="#project">View Projects</a>
        <a href="#contact" className="secondary">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
